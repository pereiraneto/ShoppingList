import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/Item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shoppingProvider: ShoppingListProvider) {
    this.shoppingList$ = this.shoppingProvider
    .getShoppingList()
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val(),
      }));
    });
  }  
  
}
