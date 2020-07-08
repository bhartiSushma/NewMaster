import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule,HttpClient }from '@angular/common/http';
import { IndexService } from './Service/index.service';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[{path:'index',component:IndexComponent}];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
