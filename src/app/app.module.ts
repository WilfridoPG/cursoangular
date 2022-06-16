import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { PrintComponent } from './components/print/print.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import {MatListModule} from '@angular/material/list';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    PrintComponent,
    LoginContainerComponent,
    LoginFormComponent,
    DetailComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
