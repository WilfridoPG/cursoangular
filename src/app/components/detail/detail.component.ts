import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/interfaces/interfaces';
import { Characters } from 'src/app/interfaces/responses';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 public idCharacter:number | undefined
 public detailsData:Characters| undefined

  constructor( private actiatedRouter:ActivatedRoute,private charactersService:CharactersService,private router:Router) { }

  ngOnInit(): void {
    this.idCharacter=Number( this.actiatedRouter.snapshot.paramMap.get('idCharacter'))
    console.log("desde details", this.idCharacter)
    this.callDetails(this.idCharacter)
  }

  public async callDetails(id:number):Promise<void> {
    this.detailsData= (await this.charactersService.getCharactersId(id));
    console.log("datos",this.detailsData)
  
  }

 getPersonaje(n:number){
  if(this.idCharacter){
    this.idCharacter =this.idCharacter+n
    if(this.idCharacter==0){
      this.idCharacter=1
    }
    console.log("valorr peticion",this.idCharacter)
    this.callDetails(this.idCharacter)

    this.router.navigate(['/detail/'+this.idCharacter])
  }
 }

}
