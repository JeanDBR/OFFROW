import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LojasPage } from '../lojas/lojas';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  chamarlojas(){
    this.navCtrl.setRoot(LojasPage);
  }

  chamarcadastro(){
    this.navCtrl.push(CadastroPage);
  }
}
