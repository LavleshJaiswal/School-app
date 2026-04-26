import { TestBed } from '@angular/core/testing';

import { HigherManagementService } from './higher-management.service';

describe('HigherManagementService', () => {
  let service: HigherManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HigherManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
