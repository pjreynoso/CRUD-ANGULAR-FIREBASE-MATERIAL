import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../service/employee.service'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  EMPLOYEE: any
  employeeId: any
  position = [
    {id: 0, value: 'Docente'},
    {id: 1, value: 'Director'},
    {id: 2, value: 'Auxiliar'},
    {id: 3, value: 'Coordinador'},
  ]
  constructor(public dialog: MatDialog,
              private activedRoute: ActivatedRoute,
              private serv: EmployeeService) {
    this.employeeId = this.activedRoute.snapshot.params['id'];
    console.log(this.employeeId,"routeeee")
    this.getEmployee(this.employeeId)
   }
  getEmployee(id: string) {
    try {
      this.serv.getEmployee(id).subscribe(item => {
        this.EMPLOYEE = item
        console.log(this.EMPLOYEE, "yeah")
      })
    } catch (error) {
      console.log(error, "error")
    }
  }

  getPosition(id: number){
    let position = this.position.find( e => e.id == id)
    return position.value
  }
  ngOnInit(): void {
  }

  openDialog(): void {
  const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: {isEdit: true, employee: this.EMPLOYEE, employeeId: this.employeeId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
