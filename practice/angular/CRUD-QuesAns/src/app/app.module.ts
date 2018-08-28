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
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    CapitalizePipe,
    NewQuestionComponent,
    ConfirmPromptComponent
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
    ConfirmPromptComponent
  ]
})
export class AppModule { }
