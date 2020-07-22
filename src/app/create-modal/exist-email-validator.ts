import { Component, OnInit, Input } from '@angular/core';
import {
    FormControl
} from '@angular/forms';
import { EmployeeService } from '../service/employee.service'

export class ExistEmailValidator {
  isExist: any;
  constructor(private serv: EmployeeService ) {}

  isExistEmail(control: FormControl): { [s: string]: boolean } {

    this.serv.getEmailEmployees(control.value).subscribe(e => console.log(e,"jejeje"));
    if (isNaN(control.value)) {
        return;
    } else if (this.isExist) {
        console.log(this.isExist,"helou")
        return { emailExist: true }
    }
  }
}