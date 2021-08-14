import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  // constructor() {
  //   console.log('cont');
  //  }

  // ngOnInit(): void {
  //   console.log('contructor');
  // }

  heroes: string[] = ['spiderman','ironman','hulk','thor'];
  heroeB: string[] = [];
  borrarHeroe = ():void => {
    //this.heroes = [];
    const heroeBorrado:string =  this.heroes.shift() || '';
    if(heroeBorrado !== ''){
      this.heroeB.push(heroeBorrado);
    }
  }

  regresarHeroe = ():void => {
    //this.heroes = [];
    const heroeBorrado:string =  this.heroeB.shift() || '';
    if(heroeBorrado !== ''){
      this.heroes.push(heroeBorrado);
    }
  }
}

