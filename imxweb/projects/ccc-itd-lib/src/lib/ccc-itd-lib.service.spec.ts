import { TestBed } from '@angular/core/testing';

import { CccItdLibService } from './ccc-itd-lib.service';

describe('CccItdLibService', () => {
  let service: CccItdLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CccItdLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
