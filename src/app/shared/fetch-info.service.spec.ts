import { TestBed } from '@angular/core/testing';

import { FetchInfoService } from './fetch-info.service';

describe('FetchInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchInfoService = TestBed.get(FetchInfoService);
    expect(service).toBeTruthy();
  });
});
