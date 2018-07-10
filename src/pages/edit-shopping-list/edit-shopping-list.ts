import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/Item/item.model';

import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-list',
  templateUrl: 'edit-shopping-list.html',
})
export class EditShoppingListPage {

  item: Item;

  constructor(private navCtrl: NavController, private navParams: NavParams, 
    private shopphingProvider: ShoppingListProvider, private toast: ToastProvider) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.shopphingProvider.editItem(item).then(()=>{
      this.toast.show(`${item.name} saved !`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  removeItem(item: Item){
    this.shopphingProvider.removeItem(item).then(() => {
      this.toast.show(`${item.name} removed !`);
      this.navCtrl.setRoot('HomePage');
    });
  }

}
