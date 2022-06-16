import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { ResultComponent } from './components/result/result.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [{
  path: '',
  component:LoginContainerComponent
},

{
  path: 'app',
  canActivate:[AuthGuard],
 children:[
  {
    path: '',
    redirectTo:'list',
    pathMatch:'full'
    
   },
  {
  path: 'list',
  component:CharacterListComponent
 },{
  path: '',
  component:LoginContainerComponent
},{
  path: 'detail/:idCharacter',
  component:DetailComponent
},]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
