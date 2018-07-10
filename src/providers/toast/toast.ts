import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(private toast: ToastController) {
    
  }

  show(message: string, duration: number = 3000){
    return this.toast
      .create({
        message,
        duration,
      }).present();
  }

}
