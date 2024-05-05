import { TestBed } from '@angular/core/testing';

import { NftV2Service } from './nft-v2.service';

describe('NftV2Service', () => {
  let service: NftV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
