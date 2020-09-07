import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService } from '../service/employee.service';
import { ModalComponent } from '../modal/modal.component'


@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent  {
  employeesData: any;
  public displayedColumns: string[] = ['name', 'salary', 'state', 'position', 'mail', 'view', 'delete'];
  position = [
    {id: 0, value: 'Docente'},
    {id: 1, value: 'Director'},
    {id: 2, value: 'Auxiliar'},
    {id: 3, value: 'Coordinador'},
  ]

  constructor(public dialog: MatDialog, private serv: EmployeeService) {
    this.serv.getEmployees().subscribe( items =>  {
      this.employeesData = items
      console.log(this.employeesData)
    })
  }

  getState(salary: number){
   if(salary <= 1000) {
     return "Bajo"
   } else if(salary <= 1500){
     return "Medio"
   } else if(salary <= 1900){
     return "Alto"
   } else {
     return "Muy Alto"
   }
  }

  getPosition(id: number){
    let position = this.position.find( e => e.id == id)
    return position.value
  }

  deleteEmployee(id: string) {
    console.log(id,"id")
    this.serv.deleteEmployee(id)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: {isEdit: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}