import { Component } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: Contact[];

  constructor(
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    this.contactService.contacts.subscribe((res: Contact[]) => {
      this.contacts = res
    })
  }
}
