import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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

  protected contratoClicado?: Contrato;

  @Output()
  public aoSelecionar = new EventEmitter<Contrato>();

  public selecionarContrato(contrato: Contrato) {
    this.aoSelecionar.emit(contrato);
    this.contratoClicado = contrato;
  }
}
