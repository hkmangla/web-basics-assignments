import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path: 'categories/:category', component: QuestionsComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionRoutingModule { }
