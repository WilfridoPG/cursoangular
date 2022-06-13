import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { ResultComponent } from './components/result/result.component';
const routes: Routes = [{
  path: 'home',
  component:ResultComponent
},
{
  path: '',
  component:LoginContainerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
