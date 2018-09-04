import { Injectable } from '@angular/core';
import {Answer} from '../answer';
import {ANSWERS} from '../mock-answers';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  getAnswers(categoryId, questionId): Answer[] {
    return ANSWERS.filter(obj => {
      return obj.categoryId === categoryId && obj.questionId === questionId;
    });
  }



  updateAnswers(answer): void {
    ANSWERS.push(answer);
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
