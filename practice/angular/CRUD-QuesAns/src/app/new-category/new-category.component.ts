import {Component, Inject, OnInit} from '@angular/core';
import {Category} from '../category';
import {CrudService} from '../crud.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  category: Category = {
      id: this.crudService.getCategories().length + 1,
      title: '',
      iconUrl: '',
      description: '',
      tags: []
  };

  onCancel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    console.log(JSON.stringify(this.category));
    this.dialogRef.close(this.category);
  }

  constructor(private crudService: CrudService,
              private dialogRef: MatDialogRef<NewCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Category) {
  }

  ngOnInit() { }

}
