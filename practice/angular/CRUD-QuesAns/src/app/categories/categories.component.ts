import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CrudService } from '../crud.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NewCategoryComponent} from '../new-category/new-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '400px';
    dialogConfig.width = '360px';

    const dialogRef = this.matDialog.open(NewCategoryComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.crudService.updateCategory(data)
    );
  }
  constructor(private crudService: CrudService,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.categories = this.crudService.getCategories();
  }

}
