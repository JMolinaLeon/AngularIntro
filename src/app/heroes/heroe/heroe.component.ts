import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponente {
  nombre: string = 'ironman';
  edad: number = 45;

  // se puede crear getters and strictInjectionParameters

  // GETTERS

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenernombre(): string{ // devuelve string
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre = (): void => {
    this.nombre = 'spiderman';
  }

  cambiarEdad = ():void => {
    this.edad = 30
  }
}
