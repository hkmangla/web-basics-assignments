import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Category} from '../category';
import {CrudService} from '../crud.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NewCategoryComponent implements OnInit {

  newTag = '';
  category: Category = {
      id: this.crudService.getCategories().length + 1,
      title: '',
      iconUrl: '',
      description: '',
      tags: []
  };

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
    console.log(JSON.stringify(this.category));
    this.dialogRef.close(this.category);
  }

  removeTag(tag): void {
    this.category.tags.splice(this.category.tags.indexOf(tag), 1);
  }

  constructor(private crudService: CrudService,
              private dialogRef: MatDialogRef<NewCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Category) {
  }

  ngOnInit() { }

}
