import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './projects/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHideTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class AppComponent implements OnInit {
  year = new Date().getFullYear();

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }
}
