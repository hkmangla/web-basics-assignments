import {Question} from './question';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    categoryId: 1,
    description: 'Where can I buy beautiful and updated Angular 5 templates?',
    likes: 1,
    dislikes: 0,
    answers: [1],
    exists: true
  },
  {
    id: 2,
    categoryId: 1,
    description: 'Internalization (i18n) in Angular 5',
    likes: 0,
    dislikes: 1,
    answers: [1, 2, 3],
    exists: true
  },
  {
    id: 3,
    categoryId: 1,
    description: 'Should I care about AOT?',
    likes: 2,
    dislikes: 0,
    answers: [1, 2],
    exists: true
  },
  {
    id: 1,
    categoryId: 2,
    description: 'What is Angular CLI?',
    likes: 3,
    dislikes: 2,
    answers: [1, 2, 3],
    exists: true
  }
];
