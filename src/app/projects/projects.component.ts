import { Component, OnInit } from '@angular/core';
import { Project } from './projects.model';
import { ProjectService } from './projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[];

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.projectService.projects.subscribe((res: Project[]) => {
      this.projects = res
    })
  }
}
