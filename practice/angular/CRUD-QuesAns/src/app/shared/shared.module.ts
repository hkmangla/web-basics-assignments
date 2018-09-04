import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmPromptComponent} from './confirm-prompt/confirm-prompt.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ConfirmPromptComponent
  ],
  exports: [
    ConfirmPromptComponent
  ],
  entryComponents: [
    ConfirmPromptComponent
  ]
})
export class SharedModule { }
