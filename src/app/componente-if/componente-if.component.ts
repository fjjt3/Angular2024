import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  standalone: true,
  imports: [],
  templateUrl: './componente-if.component.html',
  styleUrl: './componente-if.component.css'
})
export class ComponenteIfComponent {
  isLogged: boolean = false;

  alternarAutenthication(): void{
    this.isLogged = !this.isLogged;
  }
}
