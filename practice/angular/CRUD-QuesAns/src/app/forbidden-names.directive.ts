import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export function forbiddenValidatorFunction(names: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let value = '';
      if (control.value) {
        value = control.value.toLowerCase();
      }
      const forbidden = names.toLowerCase().trim()
                                .split(' ').includes(value);
      return forbidden ? {'forbiddenName': true} : null;
    };
}
@Directive({
  selector: '[appForbiddenNames]',
  providers: [{provide: NG_VALIDATORS, useExisting:
                ForbiddenNamesDirective, multi: true}]
})
export class ForbiddenNamesDirective implements Validator {

  @Input('appForbiddenNames') appForbiddenNames: string;

  validate (control: AbstractControl): {[key: string]: any} | null {
      return forbiddenValidatorFunction(this.appForbiddenNames)(control);
  }
  constructor() { }

}
