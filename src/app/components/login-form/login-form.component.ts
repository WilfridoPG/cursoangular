import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription,of } from 'rxjs';

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
  value:string = ""
  public loading:boolean = false
  public personas:Persona[]=[{name: "John",age: 34},{name: "Ana",age: 24}]
  valuesSubs:Subscription | undefined

   myObservable = of(1, 2, 3);
  constructor( public fb:FormBuilder ) { }

  loginForm=this.fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required, Validators.minLength(8)]]
  })



  /*public loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });*/



  ngOnInit(): void {

   

// Create observer object
const myObserver = {
  next: (x: number) => console.log('Observer got a next value: ' + x),
  error: (err: Error) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object
this.myObservable.subscribe(myObserver);
  /* this.obs=new Observable<string>(observer => {


      setTimeout(() => {
        observer.next("helllo")
      }, 1000);

      
      setTimeout(() => {
        observer.next("helllo1")
      }, 2000);
    
      
      setTimeout(() => {
        observer.next("helllo2")
      }, 3000);
    
            
      setTimeout(() => {
        observer.complete()
      }, 3000);
    
 
    });

    this.subscription=this.obs.subscribe( {

      next(num) { console.log('Next num: ' + num)},
  error(err) { console.log('Received an error: ' + err)},
  complete() { console.log('2nd sequence finished.'); }
  
     
    })*/

    this.valuesSubs=this.loginForm.valueChanges.subscribe((data)=>{
      console.log(this.loginForm.controls);
    })
  }

  ngOnDestroy(): void {

   this.subscription?.unsubscribe();

  }
  public onSubmit(): void {
    console.log("-",this.loginForm);
   this.loginCall(this.loginForm)
  }


 loginCall(formVlues:any):void {

   this.loading=true
   
   setTimeout(() => {
     console.log("-",formVlues);
     this.loading=false
   }, 3000);
 }

}
