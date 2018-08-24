import { Injectable } from '@angular/core';
import {Heroes} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched Heroes');
    return of(Heroes);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched Hero');
    return of(Heroes.find(hero => hero.id === id));
  }

  deleteHero(hero: Hero): void {
    this.messageService.add('HeroService: Hero deleted!')
    Heroes.splice(Heroes.indexOf(hero), 1);
  }

  constructor(private messageService: MessageService) { }
}
