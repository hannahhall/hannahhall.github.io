import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paragraph } from "./about.model";

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {
  private _paragraphs: BehaviorSubject<Paragraph[]> = new BehaviorSubject<Paragraph[]>([]);

  constructor(private http: HttpClient) { 
    this.getParagraphs().subscribe(res => this._paragraphs.next(res))
  }

  get paragraphs() {
    return this._paragraphs.asObservable()
  }

  getParagraphs() {
    return this.http.get<Paragraph[]>(`${environment.api}/paragraphs`);
  }
}
