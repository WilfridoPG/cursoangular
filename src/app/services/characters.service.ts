import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Characters, CharactersResponse} from '../interfaces/responses'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor( private http:HttpClient) { }

  getCharacters(filterName?:string): Promise<CharactersResponse | undefined> {
    let url='https://rickandmortyapi.com/api/character'
    if(filterName){
      url=url+'?name='+filterName
    }
    return this.http.get<CharactersResponse>(url)
    .toPromise()
    .then(caracteres=>{return caracteres})
    .catch(error=>{
      console.error(error)
      return undefined
    })
  }

  getCharactersId(id:number): Promise<Characters | undefined> {
    return this.http.get<Characters>('https://rickandmortyapi.com/api/character/'+id)
    .toPromise()
    .then(caracteres=>{return caracteres})
    .catch(error=>{
      console.error(error)
      return undefined
    })
  }

}
