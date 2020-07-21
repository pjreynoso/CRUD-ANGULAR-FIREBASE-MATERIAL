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

// Firebase ------------->
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EmailValidationDirective } from './validations/email-validation.directive';

var config = {
    apiKey: "AIzaSyC3C8gydFRx1HROxdICfU3CLXreLh7WHyY",
    authDomain: "project-employee-40060.firebaseapp.com",
    databaseURL: "https://project-employee-40060.firebaseio.com",
    projectId: "project-employee-40060",
    storageBucket: "project-employee-40060.appspot.com",
    messagingSenderId: "608952340275",
    appId: "1:608952340275:web:caaa9f6cdbc411031af846",
    measurementId: "G-03SZN5HR81"
  };



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
    DialogOverviewDialog,
    EmailValidationDirective
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
    MatSliderModule,
    //firebase
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage 
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
