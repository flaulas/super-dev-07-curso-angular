import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NavbarMenu {
  link: string;
  titulo: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  // Input => entrada
  // Output => saída
  @Input() menus: NavbarMenu[] = [];
}
