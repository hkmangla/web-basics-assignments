import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';
import {CategoriesComponent} from './categories/categories.component';
import {AnswersComponent} from './answers/answers.component';


const routes: Routes = [
  {path: 'categories/:category', component: QuestionsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories/:category/:questionID', component: AnswersComponent}
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
