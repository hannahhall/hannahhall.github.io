import { Component } from '@angular/core';
import { Tech } from './tech.model';
import { TechService } from './tech.service';

@Component({
  selector: 'tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
  techs: Tech[];

  constructor(
    private techService: TechService,
  ) { }

  ngOnInit() {
    this.techService.techs.subscribe((res: Tech[]) => {
      this.techs = res
    })
  }
}
