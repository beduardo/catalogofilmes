import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesFilmePage } from './detalhes-filme';

@NgModule({
  declarations: [
    DetalhesFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesFilmePage),
  ],
  exports: [
    DetalhesFilmePage
  ]
})
export class DetalhesFilmePageModule {}
