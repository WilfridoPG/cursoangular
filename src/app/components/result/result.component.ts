import { Component } from '@angular/core';
import { Person } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
 public textToPrint: string="";
 public abel:Person={
    age:26,
    name:"abel"
  }
  recibeName(name:string):void{
    console.log("name:::::",name);
  }

  toPrint(): void {
    this.textToPrint="hola"
    this.abel.nickname="abel1111" 
    console.log("print",this.abel)
  }

 createPerson(person:Person) {
  return person
 }
}
