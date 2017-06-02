import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Filme } from '../../models/filme';
import { DetalhesFilmePage } from '../detalhes-filme/detalhes-filme';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  filmes: Filme[];
  
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {
  
    this.filmes = [
      new Filme("Vingadores", "1", "2016"),
      new Filme("Mulher Maravilha", "2", "2017"),
      new Filme("Velozes e Furiosos", "3", "2016"),
      new Filme("O Poderoso Chefinho", "4", "2017"),
      new Filme("O Poderoso Chefão", "5", "1990"),
      new Filme("De volta para o futuro", "6", "1985"),
      new Filme("As Branquelas", "7", "2010"),
      new Filme("Matrix", "8", "1999"),
      new Filme("Batman", "9", "2005"),
      new Filme("Logan", "10", "2017"),
      new Filme("Vingadores", "1", "2016"),
      new Filme("Mulher Maravilha", "2", "2017"),
      new Filme("Velozes e Furiosos", "3", "2016"),
      new Filme("O Poderoso Chefinho", "4", "2017"),
      new Filme("O Poderoso Chefão", "5", "1990"),
      new Filme("De volta para o futuro", "6", "1985"),
      new Filme("As Branquelas", "7", "2010"),
      new Filme("Matrix", "8", "1999"),
      new Filme("Batman", "9", "2005"),
      new Filme("Logan", "10", "2017"),
      new Filme("Vingadores", "1", "2016"),
      new Filme("Mulher Maravilha", "2", "2017"),
      new Filme("Velozes e Furiosos", "3", "2016"),
      new Filme("O Poderoso Chefinho", "4", "2017"),
      new Filme("O Poderoso Chefão", "5", "1990"),
      new Filme("De volta para o futuro", "6", "1985"),
      new Filme("As Branquelas", "7", "2010"),
      new Filme("Matrix", "8", "1999"),
      new Filme("Batman", "9", "2005"),
      new Filme("Logan", "10", "2017")
    ];
  }

  detalhes(filme: Filme) {
    this.navCtrl.push(DetalhesFilmePage, { f: filme });
  }

  novoFilme() {

    let alerta = this.alertCtrl.create({
      title: "Novo Filme",
      subTitle: "Exemplo de um alerta",
      buttons: ['Ok']
    })
    alerta.present();
  }

}
