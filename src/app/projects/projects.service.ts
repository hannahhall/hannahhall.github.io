import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, timeout, retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from "./projects.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
    this.getProjects().subscribe(res => this._projects.next(res))
  }

  get isLoading() {
    return this._isLoading.asObservable();
  }

  set setIsLoading(value: boolean) {
    this._isLoading.next(value);
  }

  get projects() {
    return this._projects.asObservable()
  }

  getProjects() {
    let isSuccess = true;
    return this.http.get<Project[]>(`${environment.api}/projects`).pipe(
      timeout(3000),
      retry(4),
      catchError((_, caught) => {
        isSuccess = false
        return caught
      }),
      delay(1000),
      finalize(()=> {
        if (isSuccess) {
          this.setIsLoading = false;
        }
      })
    );
  }
}
