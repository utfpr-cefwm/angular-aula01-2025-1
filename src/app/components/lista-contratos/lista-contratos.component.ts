import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Contrato } from '../../models/contrato';

@Component({
  selector: 'app-lista-contratos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-contratos.component.html',
  styleUrl: './lista-contratos.component.css',
})
export class ListaContratosComponent {

  @Input({
    required: true,
  })
  public contratosPossiveis!: Contrato[];

}
