import { TestBed, inject } from '@angular/core/testing';

import { UploadTService } from './upload-t.service';

describe('UploadTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadTService]
    });
  });

  it('should be created', inject([UploadTService], (service: UploadTService) => {
    expect(service).toBeTruthy();
  }));
});
