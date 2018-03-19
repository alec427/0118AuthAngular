import { TestBed, inject } from '@angular/core/testing';

import { UploadTripService } from './uploadTrip.service';

describe('UploadTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadTripService]
    });
  });

  it('should be created', inject([UploadTripService], (service: UploadTripService) => {
    expect(service).toBeTruthy();
  }));
});
