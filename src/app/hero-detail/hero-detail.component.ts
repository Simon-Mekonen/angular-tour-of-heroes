import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { HeroService } from '../services/hero.service';

import { Component, Input } from '@angular/core';
import { Hero } from '../types/hero.types';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})

export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
    /* This holds information about the route to this instance of the HeroDetailComponent.
     This component is interested in the route's parameters extracted from the URL.
     The "id" parameter is the id of the hero to display. */
    private route: ActivatedRoute,
    
    /* The HeroService gets hero data from the remote server and 
    this component uses it to get the hero-to-display. */
    private heroService: HeroService,

    /* The location is an Angular service for interacting with the browser.
    This service lets you navigate back to the previous view. */
    private location:Location,
  ) {}
  
  ngOnInit(): void {
    this.getHero();        
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void{
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
