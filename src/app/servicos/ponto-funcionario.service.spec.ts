import { TestBed, inject } from '@angular/core/testing';

import { PontoFuncionarioService } from './ponto-funcionario.service';

describe('PontoFuncionarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PontoFuncionarioService]
    });
  });

  it('should be created', inject([PontoFuncionarioService], (service: PontoFuncionarioService) => {
    expect(service).toBeTruthy();
  }));
});
