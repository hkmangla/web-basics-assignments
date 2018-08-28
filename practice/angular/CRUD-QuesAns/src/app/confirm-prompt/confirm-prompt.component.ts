import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-prompt',
  templateUrl: './confirm-prompt.component.html',
  styleUrls: ['./confirm-prompt.component.css']
})
export class ConfirmPromptComponent implements OnInit {

  id: number;
  delete(): void {
    this.dialogRef.close({message: 'Yes', id: this.id});
  }
  cancel(): void {
    this.dialogRef.close({message: 'No', id: this.id});
  }

  constructor(private dialogRef: MatDialogRef<ConfirmPromptComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
              this.id = data.id;
  }

  ngOnInit() {
  }

}
