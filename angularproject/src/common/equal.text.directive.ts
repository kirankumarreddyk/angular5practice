import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Input } from '@angular/core';
@Directive({
    selector: '[validateEqualTo][ngModel],[validateEqualTo][formControlName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualTextDirective), multi: true }
    ]
})
export class EqualTextDirective implements Validator {
    constructor(@Attribute('validateEqualTo') public validateEqualTo: string) { }
    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        const v = c.value;
        // control value (e.g. password)
        const e = c.root.get(this.validateEqualTo);
        // value not equal
        if (e && v !== e.value) {
            return {
                validateEqualTo: false
            };
        }
        return null;
    }
}
