import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

export interface Item { 
  id: number;
  name: string;
  lastName: string;
  salary: number;
  state: number;
  position: number;
  mail: string;
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('Items');
    this.items = this.itemsCollection.valueChanges();
  }

  getEmployees(){
    return this.items;
  }
  
  addEmployee(item: Item) {
  }

  getEmailEmployees(value: string) {
    return this.afs.collection('Items',ref => ref.where('mail', '==', value)).valueChanges();
  }
}