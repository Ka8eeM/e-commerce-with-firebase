import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(
    private db: AngularFireDatabase
  ) {

  }

  getCategories() {
    return this.db.list('/categories').valueChanges();
  }
}
