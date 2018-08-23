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
  constructor(private messageService: MessageService) { }
}
