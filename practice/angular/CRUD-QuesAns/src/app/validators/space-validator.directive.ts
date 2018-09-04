import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

export function spaceValidatorFunction (control: AbstractControl): {[key: string]: any} | null {
  const forbidden = control.value.indexOf(' ') >= 0;
  return forbidden ? {'forbiddenSpace': true} : null;
}

@Directive({
  selector: '[appSpaceValidator]',
  providers: [{provide: NG_VALIDATORS,
                useExisting: SpaceValidatorDirective,
                multi: true}]
})
export class SpaceValidatorDirective implements Validator {

  validate (control: AbstractControl): {[key: string]: any} | null {
    return control.value ? spaceValidatorFunction(control) : null;
  }

  constructor() { }

}
