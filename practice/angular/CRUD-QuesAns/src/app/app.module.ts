import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { QuestionsComponent } from './questions/questions.component';
import { AppRoutingModule } from './app-routing.module';
import { CapitalizePipe } from './capitalize.pipe';
import { MatDialogModule } from '@angular/material';
import { NewQuestionComponent } from './new-question/new-question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ConfirmPromptComponent } from './confirm-prompt/confirm-prompt.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { AnswersComponent } from './answers/answers.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    CapitalizePipe,
    NewQuestionComponent,
    ConfirmPromptComponent,
    NewCategoryComponent,
    AnswersComponent,
    NewAnswerComponent,
    EditAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewQuestionComponent,
    ConfirmPromptComponent,
    NewCategoryComponent,
    NewAnswerComponent,
    EditAnswerComponent
  ]
})
export class AppModule { }
