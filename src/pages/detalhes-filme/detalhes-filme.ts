import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../models/filme';

/**
 * Generated class for the DetalhesFilmePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhes-filme',
  templateUrl: 'detalhes-filme.html',
})
export class DetalhesFilmePage {

  filme: Filme;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filme = navParams.get("f");
  }

}
