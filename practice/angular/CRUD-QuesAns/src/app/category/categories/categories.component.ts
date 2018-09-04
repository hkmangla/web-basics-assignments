import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NewCategoryComponent} from '../new-category/new-category.component';
import { CategoryService } from '../services/category.service'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = this.categoryService.getCategoryTitles();
    const dialogRef = this.matDialog.open(NewCategoryComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.categoryService.updateCategory(data)
    );
  }
  constructor(private categoryService: CategoryService,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
