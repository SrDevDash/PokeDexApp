import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-podedex',
  templateUrl: './podedex.component.html',
  styleUrls: ['./podedex.component.css']
})
export class PodedexComponent implements OnInit {

  error:Boolean = false;
  loading:Boolean = true;
  pokemon: any = null;
  pokemonID:string = Math.floor(Math.random() * 806 + 1).toString();

  constructor(private _http: HttpService,private pokeDexService: PokedexService) { }

  ngOnInit(): void {
    this.searchPokemon();
    this.pokeDexService.pokeID = this.pokemonID;
    this.pokeDexService.getPokemonEscuchar().subscribe(
      (id => {
        this.pokemonID = id;
        this.searchPokemon();
      })
    )
  }

  searchPokemon(): void {
    // Este es el metodo creado en http.service.ts
    this._http.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data
          this.loading = false
          this.error = false
        },
        error => {
          this.pokemon = null
          this.loading = false
          this.error = true
        }
      )
  }

}
