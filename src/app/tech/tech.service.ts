import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tech } from "./tech.model";

@Injectable({
  providedIn: 'root'
})
export class TechService {
  private _techs: BehaviorSubject<Tech[]> = new BehaviorSubject<Tech[]>([]);

  constructor(private http: HttpClient) { 
    this.getTechs().subscribe(res => this._techs.next(res))
  }

  get techs() {
    return this._techs.asObservable()
  }

  getTechs() {
    return this.http.get<Tech[]>(`${environment.api}/techs`);
  }
}
