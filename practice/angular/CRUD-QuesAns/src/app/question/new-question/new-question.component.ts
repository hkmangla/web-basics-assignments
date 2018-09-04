import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestionText: string;

  cancel(): void {
    this.matDialogRef.close();
  }

  save(): void {
    this.matDialogRef.close(this.newQuestionText);
  }
  constructor(private matDialogRef: MatDialogRef<NewQuestionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
