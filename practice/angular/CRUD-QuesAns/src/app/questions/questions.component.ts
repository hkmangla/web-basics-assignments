import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import {CrudService} from '../crud.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NewQuestionComponent} from '../new-question/new-question.component';
import {QUESTIONS} from '../mock-questions';
import {ConfirmPromptComponent} from '../confirm-prompt/confirm-prompt.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  category: string;
  categoryId: number;
  newQuestionText: string;

  getCategoryId(): number {
    this.category = this.route.snapshot.paramMap.get('category');
    return this.crudService.getCategoryId(this.category);
  }

  getQuestions(): void {
    this.categoryId = this.getCategoryId();
    this.questions = this.crudService.getQuestions(this.categoryId);
  }

  incLikes(questionId): void {
    this.crudService.incLikes(questionId, this.categoryId);
  }

  incDislikes(questionId): void {
    this.crudService.incDislikes(questionId, this.categoryId);
  }

  delete(data): void {
    if (data.message === 'Yes') {
      this.crudService.delete(data.id, this.categoryId);
    }
  }

  openPromptDialog(id): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '200px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      message: '',
      id: id
    };

    const dialogRef = this.matDialog.open(ConfirmPromptComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.delete(data)
    );

  }

  goBack(): void {
    this.location.back();
  }

  updateQuestion(): void {
    console.log(this.newQuestionText);
    this.crudService.updateQuestion(this.getCategoryId(),
                                    this.questions.length + 1,
                                    this.newQuestionText);
    this.getQuestions();
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '360px';
    dialogConfig.height = '250px';
    dialogConfig.hasBackdrop = true;

    const dialogRef = this.matDialog.open(NewQuestionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      questionText => this.newQuestionText = questionText,
      error => console.log(error),
      this.updateQuestion.bind(this));
  }

  constructor(private crudService: CrudService,
              private route: ActivatedRoute,
              private location: Location,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.getQuestions();
  }

}
