import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Weather Changer', 'Super Hot'];
  hero = new Hero(18, 'Dr IQ', this.powers[1],
                'Chuck Overstreet');

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
  newHero(): void {
    this.hero = new Hero(42, '', '');
  }
  constructor() { }

  ngOnInit() {
  }

}
