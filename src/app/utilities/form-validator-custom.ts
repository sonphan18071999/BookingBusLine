import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function nonNullValidator(message: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === '') {
      return {nonNullError: message};
    }
    return null;
  };
}
