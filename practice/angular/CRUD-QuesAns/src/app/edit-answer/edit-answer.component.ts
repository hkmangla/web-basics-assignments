import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['../new-answer/new-answer.component.css']
})
export class EditAnswerComponent implements OnInit {

  newAnswerText: string;

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.newAnswerText);
  }

  constructor(private dialogRef: MatDialogRef<EditAnswerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.newAnswerText = data;
  }

  ngOnInit() {
  }

}
