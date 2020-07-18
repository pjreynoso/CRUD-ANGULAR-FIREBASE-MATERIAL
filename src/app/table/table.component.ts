import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';


export interface Employees {
  id: number;
  name: string;
  salary: number;
  state: string;
  position: string;
  mail: string;
}

const EMPLOYEES_DATA: Employees[] = [
  {id: 1, name: 'Pablo Reynoso Mena', salary: 2000, state: 'a', position: 'programador', mail:'p.reynoso.mena@gmail.com'},
  {id: 2, name: 'Pablo Reynoso Mena', salary: 2000, state: 'a', position: 'programador', mail:'p.reynoso.mena@gmail.com'},
  {id: 3, name: 'Pablo Reynoso Mena', salary: 2000, state: 'a', position: 'programador', mail:'p.reynoso.mena@gmail.com'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'salary', 'state', 'position', 'mail', 'view', 'delete'];
  dataSource = EMPLOYEES_DATA;

  constructor(public dialog: MatDialog) {}
  viewProfileButton(element: Employees){
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
    @Inject(MAT_DIALOG_DATA) public data: Employees) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


