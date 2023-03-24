import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumularNumero(base)"> + 5 </button>

        <span> {{ numero }} </span>

        <button (click)="acumularNumero(-base)"> -5 </button>
    `
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    acumularNumero(valor: number): void{
        this.numero += valor;
    }
}