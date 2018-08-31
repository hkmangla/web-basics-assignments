import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Answer} from '../answer';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NewQuestionComponent} from '../new-question/new-question.component';
import {NewAnswerComponent} from '../new-answer/new-answer.component';
import {EditAnswerComponent} from '../edit-answer/edit-answer.component';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  category: string;
  categoryId: number;
  question: string;
  questionId: number;
  answers: Answer[];
  answerText: string;
  editAnswerText: string;
  currentAnswerId: number;

  goBack(): void {
    this.location.back();
  }

  updateAnswers(): void {

    if ( this.answerText === '') {
      return;
    }
    const answer: Answer = {
      id: this.answers.length + 1,
      questionId: this.questionId,
      categoryId: this.categoryId,
      text: this.answerText,
      likes: 0,
      dislikes: 0,
      exists: true
    };

    this.crudService.updateAnswers(answer);
    this.getAnswers();
  }

  getAnswers(): void {
    this.answers = this.crudService.getAnswers(this.categoryId, this.questionId);
  }

  updateAnswer(): void {
    if (this.editAnswerText === undefined || this.editAnswerText.trim() === '') {
      return;
    }

    this.crudService.
        getAnswer(this.categoryId, this.questionId,
                  this.currentAnswerId).text = this.editAnswerText;
  }
  openEditDialog(answerText, answerId): void {

    this.currentAnswerId = answerId;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '250px';
    dialogConfig.data = answerText;

    const dialogRef = this.matDialog.open(EditAnswerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.editAnswerText = data,
      error => console.log(error),
      this.updateAnswer.bind(this)
    );

  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '250px';

    const dialogRef = this.matDialog.open(NewAnswerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      answerText => this.answerText = answerText,
      error => console.log(error),
      this.updateAnswers.bind(this)
    );

  }

  constructor(private crudService: CrudService,
              private route: ActivatedRoute,
              private location: Location,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.questionId = +this.route.snapshot.paramMap.get('questionID');
    console.log(this.category, this.questionId);
    this.categoryId = this.crudService.getCategoryId(this.category);
    this.question = this.crudService.getQuestionText(this.categoryId, this.questionId);
    this.getAnswers();
  }

}
