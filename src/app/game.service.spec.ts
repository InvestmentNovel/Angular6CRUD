import { TestBed, inject } from '@angular/core/testing';

import { GameserviceService } from './gameservice.service';

describe('GameserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameserviceService]
    });
  });

  it('should be created', inject([GameserviceService], (service: GameserviceService) => {
    expect(service).toBeTruthy();
  }));
});
