import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewAnswerComponent} from './new-answer/new-answer.component';
import {EditAnswerComponent} from './edit-answer/edit-answer.component';
import {AnswersComponent} from './answers/answers.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AnswerRoutingModule } from './/answer-routing.module';
import {PipeModule} from '../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    AnswerRoutingModule,
    PipeModule
  ],
  declarations: [
    NewAnswerComponent,
    EditAnswerComponent,
    AnswersComponent
  ],
  // exports: [
  //   NewAnswerComponent,
  //   EditAnswerComponent,
  //   AnswersComponent
  // ]
  entryComponents: [
    EditAnswerComponent,
    NewAnswerComponent
  ]
})
export class AnswerModule { }
