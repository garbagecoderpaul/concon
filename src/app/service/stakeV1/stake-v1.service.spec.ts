import { TestBed } from '@angular/core/testing';

import { StakeV1Service } from './stake-v1.service';

describe('StakeV1Service', () => {
  let service: StakeV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StakeV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
