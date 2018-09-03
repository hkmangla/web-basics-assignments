import { Category } from './category';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: 'angular',
    iconUrl: '../assets/category_1.png',
    description: 'Angular is a platform that makes it easy ' +
                 'to build applications with web',
    tags: ['Angular JS', 'Angular 2', 'Angular 4', 'Angular 5']
  },

  {
    id: 2,
    title: 'angular-cli',
    iconUrl: '../assets/category_2.png',
    description: 'Angular CLI is a command line interface to scaffold' +
                 ' and build angular apps using nodejs style modules.',
    tags: ['Angular Cli', 'Testing']
  }
];
