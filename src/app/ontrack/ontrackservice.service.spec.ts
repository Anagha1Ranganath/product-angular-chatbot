import { TestBed } from '@angular/core/testing';

import { OntrackserviceService } from './ontrackservice.service';

describe('OntrackserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OntrackserviceService = TestBed.get(OntrackserviceService);
    expect(service).toBeTruthy();
  });
});
