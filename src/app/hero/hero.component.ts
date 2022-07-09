import { Component, ViewChild, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// @ts-ignore
import Flickity from 'flickity';
import { Project } from '../projects/projects.model';
import { ProjectService } from '../projects/projects.service';


@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{
  @ViewChild('navbar', { static: true }) navbar: ElementRef;
  @ViewChild('hero', { static: true }) hero: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.projectService.projects.subscribe((res: Project[]) => {
      this.loadCarousel(res)
    })
  }

  loadCarousel(data: Project[]) {
    const flkty = new Flickity('.carousel', {
      "autoPlay": true, "lazyLoad": true, "percentPosition": false
    });
    const cells = data.map((project: Project) => {
      const image = new Image()
      // image.src = project.image
      image.setAttribute('style', "max-height: 240px;")
      image.setAttribute('class', 'carousel-cell')
      image.setAttribute('data-flickity-lazyload', project.image)
      return image
    })

    flkty.append(cells)
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heroBodyRect = this.hero.nativeElement.getBoundingClientRect();
    const body = this.document.getElementsByTagName('body')[0];
    if (heroBodyRect.height <= Math.abs(heroBodyRect.top)) {
      this.navbar.nativeElement.classList.add('is-fixed-top');
      this.navbar.nativeElement.classList.add('is-primary');
      this.navbar.nativeElement.classList.add('is-bold');
      body.classList.add('has-navbar-fixed-top');
    } else {
      this.navbar.nativeElement.classList.remove('is-fixed-top');
      this.navbar.nativeElement.classList.remove('is-primary');
      this.navbar.nativeElement.classList.remove('is-bold');
      body.classList.remove('has-navbar-fixed-top');
    }
  }
}
