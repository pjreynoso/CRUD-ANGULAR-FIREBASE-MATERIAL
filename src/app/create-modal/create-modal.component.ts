import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
    FormGroup,
    Validators,
    FormBuilder,
    } from '@angular/forms';
import { EmployeeService } from '../service/employee.service'
import { ValidatorsComponent } from '../validators/validators.component'



@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})

export class CreateModalComponent implements OnInit {
  @Input() isEdit: Boolean;
  @Input() employee: any;
  @Input() employeeId: string;
  //@Input() DATABASE: any;
  @Output() closedModal = new EventEmitter
  employeeForm: FormGroup;
  emailValid: Boolean;
  //data: any;

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
    this.employeeForm = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      position: [null, Validators.required],
      mail: [null, 
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      salary: [null, Validators.required]
    }, {
      validator: () => {
            console.log(this.emailValid,"validator")
            return  {'emailValid': true}
      }
    })
    this.employeeForm.setValue(this.employee)

  }

  changeEmail(){
    try {
     this.serv.getEmailEmployees(this.employeeForm.value.mail).subscribe( 
       e => {
         this.emailValid = !e[0] 
         console.log(this.emailValid,"function change")
       }
     );
    } catch(error){
      console.log(error,"eror")
    }
      console.log(this.emailValid,"email")
  }

  getErrorMessage() {
    let mailControls = this.employeeForm.controls.mail.errors ?? {}
    console.log(this.emailValid,"funcion error")
    const { required, email } = mailControls
    if(required) return "El Correo es Requerido"
    if (email) return 'El valor debe ser un correo';
    if(!this.emailValid) return 'Email es Invalido'
  } 
  closeModal() {
   this.closedModal.emit()
  }


  onSubmit() {
     this.serv.getEmailEmployees(this.employeeForm.value.mail).subscribe( 
       e => {
         if(e[0])
          {
            console.log("falso")
          this.emailValid = false
          }
         else {
            this.emailValid = true
            console.log("true")
         }
       }
     );
    try {
      if (this.isEdit) {
        //Edit
        this.serv.updateEmployee(this.employeeId,this.employeeForm.value)
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