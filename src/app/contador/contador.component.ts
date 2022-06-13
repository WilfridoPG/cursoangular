import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>

        <h2>la base es <span>{{base}}</span></h2>

        <button type="button" (click)="acumular(base)"> +{{base}} </button>
        <span> {{numero}} </span>
        <button type="button" (click)="acumular(-base)"> -{{base}} </button>
    `
})

export class ContadorComponent {
    
    title:string = 'Contador';
    numero:number = 0;
    base:number=10;

    acumular(valor:number){
    this.numero += valor;
    }

}