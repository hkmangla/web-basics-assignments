import { Injectable } from '@angular/core';
import {Category} from './category';
import {CATEGORIES} from './mock-categories';
import {Question} from './question';
import {QUESTIONS} from './mock-questions';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getQuestions(categoryId): Question[] {
    return QUESTIONS.filter(obj => {
      return obj.categoryId === categoryId;
    });
  }

  getCategoryId(categoryTitle): number {
    const category = CATEGORIES.filter(function (e) {
      return e.title === categoryTitle;
    });
    return category[0].id;
  }

  incLikes(questionId, categoryId): void {
    QUESTIONS.filter(obj => {
      return (obj.id === questionId) && (obj.categoryId === categoryId);
    })[0].likes += 1;
  }

  incDislikes(questionId, categoryId): void {
    QUESTIONS.filter(obj => {
      return (obj.id === questionId) && (obj.categoryId === categoryId);
    })[0].dislikes += 1;
  }

  delete(questionId, categoryId): void {
    QUESTIONS.filter(obj => {
      return (obj.id === questionId) && (obj.categoryId === categoryId);
    })[0].exists = false;
  }

  updateQuestion(categoryId, questionId, questionText): void {

    const question: Question = {
      id: questionId,
      categoryId: categoryId,
      description: questionText,
      likes: 0,
      dislikes: 0,
      answers: [],
      exists: true
    };

    QUESTIONS.push(question);
  }

  updateCategory(category): void {
    CATEGORIES.push(category);
  }
  constructor() { }
}
