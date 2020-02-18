import { Component } from '@angular/core';
import { techs } from '../projects';

@Component({
  selector: 'tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
  techs: any = techs;

  constructor() { }

  ngOnInit() {
  }

}
