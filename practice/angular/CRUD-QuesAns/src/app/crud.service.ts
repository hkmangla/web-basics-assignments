import { Injectable } from '@angular/core';
import {Category} from './category';
import {CATEGORIES} from './mock-categories';
import {Question} from './question';
import {QUESTIONS} from './mock-questions';
import {Answer} from './answer';
import {ANSWERS} from './mock-answers';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getAnswers(categoryId, questionId): Answer[] {
    return ANSWERS.filter(obj => {
      return obj.categoryId === categoryId && obj.questionId === questionId;
    });
  }

  getQuestions(categoryId): Question[] {
    return QUESTIONS.filter(obj => {
      return obj.categoryId === categoryId;
    });
  }

  getQuestionText(categoryId, questionId): string {
    const question: Question = QUESTIONS.filter(obj => {
      return obj.categoryId === categoryId && obj.id === questionId;
    })[0];

    return question.description;
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

  updateAnswers(answer): void {
    ANSWERS.push(answer);
  }

  updateCategory(category): void {
    if (category !== undefined && category !== null) {
      CATEGORIES.push(category);
    }
  }

  getAnswer(categoryId, questionId, answerId): Answer {
    return ANSWERS.filter(obj => {
      return obj.categoryId === categoryId &&
              obj.questionId === questionId &&
              obj.id === answerId;
    })[0];
  }
  constructor() { }
}
