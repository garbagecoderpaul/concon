import { TestBed } from '@angular/core/testing';

import { StakeV2Service } from './stake-v2.service';

describe('StakeV2Service', () => {
  let service: StakeV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StakeV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
