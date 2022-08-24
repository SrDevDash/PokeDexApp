import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.component.html',
  styleUrls: ['./pokedex-screen.component.css']
})
export class PokedexScreenComponent implements OnInit {

  @Input() loading: Boolean = false;
  @Input() error: Boolean = false;
  @Input() pokemon: any;
  constructor() {}

  ngOnInit(): void {
  }

}
