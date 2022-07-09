import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    </section>`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent { }
