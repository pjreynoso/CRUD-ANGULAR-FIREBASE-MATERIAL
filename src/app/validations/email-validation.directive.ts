import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { EmployeeService } from "../service/employee.service";

export class getDataBase {
  employeesData: any;
  constructor(private serv: EmployeeService){
    this.serv.getEmployees().subscribe( items =>  {
      this.employeesData = items
      console.log(this.employeesData)
    })
  }
  getAllEmployees(){
    return this.employeesData
  }
}

export function emailValidation(data: any): ValidatorFn {
  return(control: AbstractControl) => {
    const emailValidationDirective = new EmailValidationDirective();
    return emailValidationDirective.validate(control)
  }
}

@Directive({
  selector: '[emailValidation]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true
  }]
})
export class EmailValidationDirective implements Validator {
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const emailValue = <string>control.value;
    if(!emailValue) { return; }
    else {
      debugger
    return
    }
  }

}
