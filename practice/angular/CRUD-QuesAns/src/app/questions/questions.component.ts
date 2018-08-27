import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import {CrudService} from '../crud.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  category: string;
  categoryId: number;

  getCategoryId(): number {
    this.category = this.route.snapshot.paramMap.get('category');
    return this.crudService.getCategoryId(this.category);
  }

  getQuestions(): void {
    this.categoryId = this.getCategoryId();
    this.questions = this.crudService.getQuestions(this.categoryId);
  }

  incLikes(questionId): void {
    this.crudService.incLikes(questionId, this.categoryId);
  }

  incDislikes(questionId): void {
    this.crudService.incDislikes(questionId, this.categoryId);
  }

  delete(questionId): void {
    this.crudService.delete(questionId, this.categoryId);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private crudService: CrudService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getQuestions();
  }

}
