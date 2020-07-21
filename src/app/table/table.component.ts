import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/employee'


@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
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

  viewProfileButton(element: Employee){
    console.log(element)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'create-dialog-overview',
  templateUrl: 'create-dialog-overview.html',
})
export class DialogOverviewDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Employee) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


