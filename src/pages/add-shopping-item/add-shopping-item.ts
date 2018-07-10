import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Item } from '../../models/Item/item.model';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined,
  };

  constructor(private shoppingProvider: ShoppingListProvider, private navCtrl: NavController, private toast: ToastProvider) {
  }

  addItem(item: Item){
    this.shoppingProvider.addItem(item).then(ref => {
      this.toast.show(`${item.name} created!`);
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    })
  }

}
