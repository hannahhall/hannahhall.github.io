import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from "./contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _contacts: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  constructor(private http: HttpClient) { 
    this.getContacts().subscribe(res => this._contacts.next(res))
  }

  get contacts() {
    return this._contacts.asObservable()
  }

  getContacts() {
    return this.http.get<Contact[]>(`${environment.api}/contacts`);
  }
}
