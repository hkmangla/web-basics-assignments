import { Injectable } from '@angular/core';
import {CATEGORIES} from '../mock-categories';
import {Category} from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategoryTitles(): string {
    let ret = '';
    CATEGORIES.forEach( (elem) => {
      ret += (elem.title + ' ');
    });

    return ret;
  }

  getCategoryId(categoryTitle): number {
    const category = CATEGORIES.filter(function (e) {
      return e.title === categoryTitle;
    });
    return category[0].id;
  }

  getCategories(): Category[] {
    return CATEGORIES;
  }


  updateCategory(category): void {
    if (category !== undefined && category !== null) {
      CATEGORIES.push(category);
    }
  }

  constructor() { }
}
