import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { QuestionsComponent } from './questions/questions.component';
import { AppRoutingModule } from './/app-routing.module';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
