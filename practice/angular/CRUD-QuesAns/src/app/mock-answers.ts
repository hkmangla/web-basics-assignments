import {Answer} from './answer';

export const ANSWERS: Answer[] = [
  {
    id: 1,
    questionId: 1,
    categoryId: 1,
    text: 'Yes!',
    likes: 4,
    dislikes: 2,
    exists: true
  },
  {
    id: 2,
    questionId: 1,
    categoryId: 1,
    text: 'Yes!',
    likes: 0,
    dislikes: 1,
    exists: true
  },
  {
    id: 1,
    questionId: 2,
    categoryId: 1,
    text: 'Yes!',
    likes: 1,
    dislikes: 0,
    exists: true
  },
  {
    id: 1,
    questionId: 3,
    categoryId: 1,
    text: 'Yes!!! It has lots of benefits such as: Faster rendering, ' +
          'fewer asynchronous requests, Smaller angular framework download size and more.',
    likes: 2,
    dislikes: 0,
    exists: true
  },
  {
    id: 2,
    questionId: 3,
    categoryId: 1,
    text: 'No, it\'s just the same as JIT.',
    likes: 0,
    dislikes: 1,
    exists: true
  },
  {
    id: 1,
    questionId: 1,
    categoryId: 2,
    text: 'Yes!',
    likes: 1,
    dislikes: 0,
    exists: true
  }
];
