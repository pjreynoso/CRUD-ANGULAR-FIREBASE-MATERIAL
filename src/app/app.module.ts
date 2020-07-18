import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent, DialogOverviewDialog } from './table/table.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CreateModalComponent } from './create-modal/create-modal.component'
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';



const appRouter: Routes = [
  {path: '', component: TableComponent },
  {path: 'home', component: TableComponent },
  {path: 'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent,
    EditEmployeeComponent,
    TableComponent,
    CreateModalComponent,
    DialogOverviewDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTableModule, 
    MatDialogModule ,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOverviewDialog
  ],
  exports: [CreateModalComponent]

})
export class AppModule { }
