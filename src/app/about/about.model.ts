interface Score {
  name: string;
  rating: string;
}

interface Action {
  name: string;
  description: string;
}


export interface StatBlock {
  name: string;
  shortDescription: string;
  armorClass: number;
  maxHitPoints: number;
  speed: number;
  scores: Score[];
  skills: string;
  languages: string;
  actions: Action[];
  description: string;
  senses: string;
}
