import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PodedexComponent } from './podedex/podedex.component';
import { PokedexScreenComponent } from './pokedex-screen/pokedex-screen.component';
import { PokedexFormComponent } from './pokedex-form/pokedex-form.component';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { PokedexService } from './podedex/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    PodedexComponent,
    PokedexScreenComponent,
    PokedexFormComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService,PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
