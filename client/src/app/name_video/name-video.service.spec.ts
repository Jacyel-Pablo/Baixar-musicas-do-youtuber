import { TestBed } from '@angular/core/testing';

import { NameVideoService } from './name-video.service';

describe('NameVideoService', () => {
  let service: NameVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
