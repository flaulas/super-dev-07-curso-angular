import { Component } from '@angular/core';
import { Navbar, NavbarMenu } from "./components/navbar/navbar";

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menus: NavbarMenu[];

  constructor() {
    this.menus = [
      { link: "calculadora", titulo: "Calculadora" },
      { link: "lista-pessoas", titulo: "Lista de Pessoas" },
      { link: "alunos", titulo: "Alunos" },
      { link: "pokemons", titulo: "Pokemons" },
    ]
  }
}
