import { Contrato } from './contrato';

describe('Contrato', () => {

  let contrato: Contrato;

  beforeEach(() => {
    contrato = new Contrato(
      'Plano Básico',
      'branco',
    );
  });

  it('should create an instance', () => {
    expect(contrato).toBeTruthy();
  });

});
