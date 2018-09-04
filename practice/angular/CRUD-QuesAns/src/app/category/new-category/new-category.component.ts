import {Component, Inject, OnInit } from '@angular/core';
import {Category} from '../category';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
})
export class NewCategoryComponent implements OnInit {

  newTag = '';
  category: Category = {
      id: this.categoryService.getCategories().length + 1,
      title: '',
      iconUrl: '',
      description: '',
      tags: []
  };
  forbiddenNames: string;

  addTag(): void {
    this.newTag = this.newTag.trim();
    if (this.newTag === null || this.newTag.length < 4) {
      return;
    }
    this.category.tags.push(this.newTag);
    this.newTag = '';
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    this.category.title = this.category.title.toLowerCase();
    console.log(JSON.stringify(this.category));
    this.dialogRef.close(this.category);
  }

  removeTag(tag): void {
    this.category.tags.splice(this.category.tags.indexOf(tag), 1);
  }

  constructor(private categoryService: CategoryService,
              private dialogRef: MatDialogRef<NewCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.forbiddenNames = data;
    console.log(this.forbiddenNames);
  }

  ngOnInit() { }

}
