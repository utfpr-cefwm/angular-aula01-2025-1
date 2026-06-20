import { Pipe, PipeTransform } from '@angular/core';

const CLASSES_PADRAO = {
  zero: '',
  positivo: 'positivo',
  negativo: 'negativo',
};
export type ClassNamesDeValor = Partial<typeof CLASSES_PADRAO>;

@Pipe({
  name: 'classPorValor',
  standalone: true
})
export class ClassPorValorPipe implements PipeTransform {

  /**
   * Retorna um dentre os nomes de classes especificados, de acordo
   * com o `valor` passado pelo chamador.
   *
   * @param valor Número a ser verificado.
   * @param classes Nomes de classes a se utilizar em cada cenário
   * (positivo/negativo/zero).
   *
   * @returns O nome da(s) classe(s) de acordo com o valor.
   */
  public transform(
    valor: number,
    classes: ClassNamesDeValor = CLASSES_PADRAO,
  ): string {
    if (+valor.toFixed(2) > 0) {
      return classes.positivo || CLASSES_PADRAO.positivo;
    } else if (+valor.toFixed(2) < 0) {
      return classes.negativo || CLASSES_PADRAO.negativo;
    } else {
      return classes.zero || CLASSES_PADRAO.zero;
    }
  }

}
