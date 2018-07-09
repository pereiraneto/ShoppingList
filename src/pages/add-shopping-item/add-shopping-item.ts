import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/Item/item.model';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item;

  constructor(private shoppingProvider: ShoppingListProvider, private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
    this.shoppingProvider.addItem(item).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    })
  }

}
