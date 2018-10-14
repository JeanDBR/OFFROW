import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  nome: string = "";
  cpf: string = "";
  email: string = "";
  senha: string = "";


  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Concluído!!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  salvarcliente(){
    this.showAlert();  
  }

  chamarlogin(){
    this.navCtrl.push(LoginPage);
  }
}
