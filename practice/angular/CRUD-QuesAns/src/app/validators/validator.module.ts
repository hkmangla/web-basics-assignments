import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForbiddenNamesDirective} from './forbidden-names.directive';
import {SpaceValidatorDirective} from './space-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ForbiddenNamesDirective,
    SpaceValidatorDirective
  ],
  exports: [
    ForbiddenNamesDirective,
    SpaceValidatorDirective
  ]
})
export class ValidatorModule { }
