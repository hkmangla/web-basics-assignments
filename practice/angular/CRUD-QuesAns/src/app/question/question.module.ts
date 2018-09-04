import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionsComponent} from './questions/questions.component';
import {NewQuestionComponent} from './new-question/new-question.component';
import { QuestionRoutingModule } from './/question-routing.module';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '../pipes/pipe.module';
import {SharedModule} from '../shared/shared.module';
import {ConfirmPromptComponent} from '../shared/confirm-prompt/confirm-prompt.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    QuestionsComponent,
    NewQuestionComponent
  ],
  entryComponents: [
    NewQuestionComponent
  ]
})
export class QuestionModule { }
