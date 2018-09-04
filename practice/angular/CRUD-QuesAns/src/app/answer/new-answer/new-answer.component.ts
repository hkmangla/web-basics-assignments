import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {

  newAnswerText = '';

  save(): void {
    this.dialogRef.close(this.newAnswerText.trim());
  }
  cancel(): void {
    this.dialogRef.close('');
  }
  constructor(private dialogRef: MatDialogRef<NewAnswerComponent>) { }

  ngOnInit() {
  }

}
