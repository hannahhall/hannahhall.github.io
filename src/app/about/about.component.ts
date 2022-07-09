import { Component, OnInit } from '@angular/core';
import { StatBlock } from './about.model';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  statBlock: StatBlock = {
    name: 'Senior Instructor',
    shortDescription: 'Nashville Software School',
    armorClass: 12,
    maxHitPoints: 42,
    speed: 73,
    scores: [
      {
        name: 'Str',
        rating: '9 (-1)'
      },
      {
        name: 'Dex',
        rating: '14 (+2)'
      },
      {
        name: 'Con',
        rating: '11 (+0)'
      },
      {
        name: 'Int',
        rating: '17 (+3)'
      },
      {
        name: 'Wis',
        rating: '12 (+1)'
      },
      {
        name: 'Cha',
        rating: '11 (+0)'
      }
    ],
    skills: 'Crushing Bugs, Styling with Grid, and Mentoring New Adventurers',
    languages: 'Python, Javascript, and C#',
    actions: [
      {
        name: 'Have you thought about...?',
        description: 'Choose 1 ally that you can see. Ally gains advantage on intelligence checks'
      },
      {
        name: 'Locate Bug',
        description: 'After a problem has been described, you are able to pinpoint the location of the bug within 10 lines of code'
      },
      {
        name: 'Comprehend Code',
        description: 'For the duration of the spell, you are able to understand the codebase. Does not need to be in a language you already know.'
      }
    ],
    senses: 'Missing commas',
    description: ''

  };
  constructor() { }

  ngOnInit() {
  }

}
