import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Hulk','Ironman','Thor'];
  heroeEliminado: string = '';

  borrarHeroe(): void {
    this.heroeEliminado = this.heroes.pop() || '';
  }



}
