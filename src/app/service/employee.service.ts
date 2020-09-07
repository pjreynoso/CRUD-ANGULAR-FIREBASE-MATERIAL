import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

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
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getEmployee(id: string){
    return this.afs.collection('Items').doc(id).valueChanges()
  }

  getEmployees(){
    return this.items;
  }
  
  addEmployee(item: Item) {
    this.itemsCollection.add(item)
  }

  getEmailEmployees(value: string) {
    return this.afs.collection('Items',ref => ref.where('mail', '==', value)).valueChanges();
  }

  updateEmployee(id: string, item: any){
    this.afs.collection('Items').doc(id).update(item)
  }

  deleteEmployee(id:string){
    try {
     this.afs.collection('Items').doc(id).delete()
    }catch (error){
      console.log(error)
    }
  }
}