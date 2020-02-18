import { Component, ViewChild, ElementRef, AfterViewInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { projects } from '../projects';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  projects: any = projects;
  @ViewChild('navbar', {static: true}) navbar: ElementRef;
  @ViewChild('hero', {static: true}) hero: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngAfterViewInit() {

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
    // if (this.document.body.scrollTop > 20 ||     
    // this.document.documentElement.scrollTop > 20) {
    //   document.getElementById('subTitle').classList.add('red');
    //   document.getElementById('paragraph').classList.add('green');
    // }
  }
}
