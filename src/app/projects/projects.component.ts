import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: any = projects;

}
