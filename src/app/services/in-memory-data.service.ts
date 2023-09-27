import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../types/hero.types';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, power: 1, name: 'Dr. Nice' },
      { id: 13, power: 9, name: 'Bombasto' },
      { id: 14, power: 10, name: 'Celeritas' },
      { id: 15, power: 8, name: 'Magneta' },
      { id: 16, power: 7, name: 'RubberMan' },
      { id: 17, power: 6, name: 'Dynama' },
      { id: 18, power: 5, name: 'Dr. IQ' },
      { id: 19, power: 4, name: 'Magma' },
      { id: 20, power: 3, name: 'Tornado' },
      { id: 21, power: 2, name: 'SimEri' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
