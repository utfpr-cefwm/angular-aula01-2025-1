import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaSaldoComponent } from "./components/consulta-saldo/consulta-saldo.component";
import { ListaContratosComponent } from "./components/lista-contratos/lista-contratos.component";
import { Contrato } from './models/contrato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConsultaSaldoComponent,
    ListaContratosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected contrato?: Contrato;

  protected contratos: Contrato[] = [
    {
      nome: 'Plano Light',
      cor: 'branco',
    },
    {
      nome: 'Plano Plus',
      cor: 'azul',
    },
    {
      nome: 'Plano TotalZord',
      cor: 'preto',
    },
  ];
}
