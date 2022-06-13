import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','hulk','Thor'];
  heroesBorrado:string =""

  borrarHeroe(){
    this.heroesBorrado=this.heroes.shift() ||''
  }



}
