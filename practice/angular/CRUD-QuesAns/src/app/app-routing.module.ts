import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';
import {CategoriesComponent} from './categories/categories.component';


const routes: Routes = [
  {path: 'categories/:category', component: QuestionsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '', redirectTo: '/categories', pathMatch: 'full'}
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
