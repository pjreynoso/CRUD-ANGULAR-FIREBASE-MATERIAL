import { Component, OnInit, Input } from '@angular/core';
import {
    FormGroup,
    Validators,
    FormBuilder,
    FormControl,
    ValidatorFn,
    AbstractControl,
    Validator,
    ValidationErrors} from '@angular/forms';
import { EmployeeService } from '../service/employee.service'
import { ExistEmailValidator }  from './exist-email-validator'



@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})

export class CreateModalComponent implements OnInit {
  @Input() isEdit: Boolean;
  @Input() DATABASE: any;
  employeeForm: FormGroup;
  data: any;

  position = [
    {id: 0, value: 'Docente'},
    {id: 1, value: 'Director'},
    {id: 2, value: 'Auxiliar'},
    {id: 3, value: 'Coordinador'},
  ]


  constructor(
    private formBuilder: FormBuilder,
    private serv: EmployeeService
  ) {
  }

  ngOnInit(): void {
    var isExistEmailValidator = new ExistEmailValidator(this.serv);
    this.employeeForm = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      position: [null, Validators.required],
      mail: [null, 
        Validators.compose([
          Validators.required,
          Validators.email,
          isExistEmailValidator.isExistEmail.bind(isExistEmailValidator)
        ])
      ],
      salary: [null, Validators.required]
    })

  }

  changeEmail(){
    this.serv.getEmailEmployees(this.employeeForm.controls.mail.value).subscribe( (e: any) => this.data = e);
  }

  getErrorMessage() {
    let mailControls = this.employeeForm.controls.mail.errors
    if(mailControls.required) return "El Correo es Requerido"
    if (mailControls.email) return 'El valor debe ser un correo';
  }


  onSubmit() {
    try {
      if (this.isEdit) {
        //Edit
      } else{
        //Create
        this.serv.addEmployee(this.employeeForm.value);
      }
    } catch (err){
      console.log(err)
    }
  }
    formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}


/** Error when invalid control is dirty, touched, or submitted. */