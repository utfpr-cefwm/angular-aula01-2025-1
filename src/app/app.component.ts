import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaSaldoComponent } from "./components/consulta-saldo/consulta-saldo.component";
import { Contrato } from './models/contrato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConsultaSaldoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected contrato: Contrato = {
    nome: 'Plano Plus',
    cor: 'azul',
  }
}
