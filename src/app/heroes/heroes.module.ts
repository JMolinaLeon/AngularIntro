import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponente } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeroeComponente,
    ListadoComponent

  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule //
  ],
  providers: [],
  bootstrap: []
})

export class HeroesModule { }
