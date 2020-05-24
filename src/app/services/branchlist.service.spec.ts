import { TestBed } from '@angular/core/testing';

import { BranchlistService } from './branchlist.service';

describe('BranchlistService', () => {
  let service: BranchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
