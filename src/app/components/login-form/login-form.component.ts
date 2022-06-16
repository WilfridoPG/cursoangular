import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription,of } from 'rxjs';
import { Characters } from 'src/app/interfaces/responses';
import { CharactersService } from 'src/app/services/characters.service';

type Persona={
  name:string,
  age:number
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  obs:Observable <string> | undefined
  subscription:Subscription | undefined
  public loading:boolean = false
  public personas:Persona[]=[{name: "John",age: 34},{name: "Ana",age: 24}]
  valuesSubs:Subscription | undefined
  public characters:Characters[]|undefined=[]
  myObservable = of(1, 2, 3);
  public filterName=new FormControl('')
  filterNombre:Subscription | undefined

  constructor( 
    public fb:FormBuilder,
    private charactersService:CharactersService,private router:Router ) { }

  loginForm=this.fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required, Validators.minLength(8)]]
  })
  /*public loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });*/
  public doToDetail(id:number){
    this.router.navigate(['/detail/'+id])
  }

  ngOnInit(): void {
    this.filterNombre=  this.filterName.valueChanges.subscribe((value) => {
      console.log(value)
      this.call(value)
    })
    //llama al servicio 
    this.call()
    // Create observer object
    const myObserver = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // Execute with the observer object
    this.myObservable.subscribe(myObserver);

    this.valuesSubs=this.loginForm.valueChanges.subscribe((data)=>{
      console.log(this.loginForm.controls);
    })
    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.filterNombre?.unsubscribe();

  }

  public onSubmit(): void {
    console.log("-",this.loginForm);

    this.loginCall(this.loginForm)
    localStorage.setItem('curso-angular',JSON.stringify(this.loginForm.value))
    this.router.navigate(['/app']);
  }

 /* public call():void {
    this.charactersService.getCharacters().then(charactersList => {
      this.characters=charactersList?.results
      console.log("datos desde login", this.characters)
    }).catch((error) => {
      this.characters=undefined
    })

  }*/

  public async call(filter?: string):Promise<void> {
    this.characters= (await this.charactersService.getCharacters(filter))?.results;
    console.log("datos",this.characters)
  
  }

 loginCall(formVlues:any):void {
   this.loading=true
   setTimeout(() => {
  
    localStorage.setItem("curso-angular",JSON.stringify(this.loginForm.value))
    this.router.navigate(['/app'])
     this.loading=false
   }, 3000);
 }

}
