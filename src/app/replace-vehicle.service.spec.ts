import { TestBed, inject } from '@angular/core/testing';

import { ReplaceVehicleService } from './replace-vehicle.service';

describe('ReplaceVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplaceVehicleService]
    });
  });

  it('should be created', inject([ReplaceVehicleService], (service: ReplaceVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
