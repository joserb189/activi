import { TestBed } from '@angular/core/testing';

import { ApicompleService } from './apicomple.service';

describe('ApicompleService', () => {
  let service: ApicompleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicompleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
