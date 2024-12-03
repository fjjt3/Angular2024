import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  standalone: true,
  imports: [],
  template: `
  <h1>{{tituloComponenteInline}}</h1>
      <p>
        fuente mas grande
      </p>
  `,
  styles: `
    h1{
      color: blue;
    }
    p{
      font-size: 50px;
    }
  `
})
export class ComponenteEnLineaComponent {
  tituloComponenteInline = 'Componente Inline';
}
