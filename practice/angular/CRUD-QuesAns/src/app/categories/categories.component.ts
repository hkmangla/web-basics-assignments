import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.categories = this.crudService.getCategories();
  }

}
