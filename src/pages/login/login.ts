import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string = "";
  senha: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  chamarhome(){
    this.navCtrl.setRoot(HomePage);
  }

  chamarcadastro(){
    this.navCtrl.push(CadastroPage);
  }
}
