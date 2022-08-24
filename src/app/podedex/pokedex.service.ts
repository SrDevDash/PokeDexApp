import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokeID:string = '0';
  private pokeID$: Subject<string>;

  constructor() { 
    this.pokeID$ = new Subject();
  }

  changePokeID(id:string){
    this.pokeID = id;
    this.pokeID$.next(this.pokeID);
  }

  getPokemonEscuchar(): Observable<string>{
    return this.pokeID$.asObservable();
  }
}
