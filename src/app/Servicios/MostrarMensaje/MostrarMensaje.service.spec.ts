/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MostrarMensajeService } from '../MostrarMensaje/MostrarMensaje.service';

describe('Service: MostrarMensaje', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MostrarMensajeService]
    });
  });

  it('should ...', inject([MostrarMensajeService], (service: MostrarMensajeService) => {
    expect(service).toBeTruthy();
  }));
});
