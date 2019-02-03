import { TestBed } from '@angular/core/testing';

import { EspeciePlantaService } from './especie-planta.service';

describe('EspeciePlantaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspeciePlantaService = TestBed.get(EspeciePlantaService);
    expect(service).toBeTruthy();
  });
});
