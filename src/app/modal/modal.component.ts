import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Employee } from '../models/employee'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isEdit: Boolean
  employee: any;
  employeeId: string;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) {
      this.isEdit = this.data.isEdit
      this.employee= this.data.employee
      this.employeeId =this.data.employeeId
      console.log(this.data.employee,"DATAA :')")
    }

  public onNoClick() {
    this.dialogRef.close();
  }

}