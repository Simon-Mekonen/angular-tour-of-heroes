import { Injectable } from '@angular/core';
import { Hero } from './types/hero.types';
import { HEROES } from './mock-heroes';
// import * as HEROES from './mock-heroes.json';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private MessageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.MessageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
