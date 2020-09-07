import { Component } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors, NgForm, ValidatorFn } from '@angular/forms';
import { EmployeeService } from '../service/employee.service'

@Component({
    selector: 'app-validators',
    templateUrl: './validators.component.html',
    styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent {
    constructor(
        private serv: EmployeeService
    ) { }
    static emailValidator(x): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            console.log(control.value.mail, "helou")
            return null;
        };
    }
}

