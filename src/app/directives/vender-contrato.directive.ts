import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appVenderContrato]',
  standalone: true
})
export class VenderContratoDirective {

  private exibiu = false;

  @Input({
    alias: 'appVenderContrato',
  })
  public mensagem?: string;

  constructor(
  ) {
  }

  public ngOnInit() {
    if (!this.mensagem) {
      this.mensagem = "Bora assinar um contrato mais caro?";
    }
  }

  @HostListener("mouseenter")
  public exibeMensagem(): void {
    if (this.exibiu === false) {
      alert(this.mensagem);
      this.exibiu = true;
    }
  }

}
