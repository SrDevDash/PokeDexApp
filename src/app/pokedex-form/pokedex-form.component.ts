import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../podedex/pokedex.service';

@Component({
  selector: 'app-pokedex-form',
  templateUrl: './pokedex-form.component.html',
  styleUrls: ['./pokedex-form.component.css']
})
export class PokedexFormComponent implements OnInit {

  inputSearch:string = '';
  constructor(private podeDexService: PokedexService) { }

  ngOnInit(): void {
  }
  lookForPokemon(){
    this.podeDexService.changePokeID(this.inputSearch);
  }
}
