import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Characters } from 'src/app/interfaces/responses';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  public characters:Characters[]|undefined=[]
  filterNombre:Subscription | undefined
  public filterName=new FormControl('')
  constructor(private charactersService:CharactersService,private router:Router) { }

  ngOnInit(): void {
    this.filterNombre=  this.filterName.valueChanges.subscribe((value) => {
      console.log(value)
      this.call(value)
    })
    this.call()
  }

  public async call(filter?: string):Promise<void> {
    this.characters= (await this.charactersService.getCharacters(filter))?.results;
    console.log("datos",this.characters)
  
  }
  public doToDetail(id:number){
    this.router.navigate(['/detail/'+id])
  }

  ngOnDestroy(): void {

    this.filterNombre?.unsubscribe();

  }

}
