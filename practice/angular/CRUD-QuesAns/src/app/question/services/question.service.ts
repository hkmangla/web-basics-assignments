import { Injectable } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

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

  constructor() { }
}
