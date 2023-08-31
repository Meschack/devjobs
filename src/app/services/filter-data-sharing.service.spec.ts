import { TestBed } from '@angular/core/testing';

import { FilterDataSharingService } from './filter-data-sharing.service';

describe('FilterDataSharingService', () => {
  let service: FilterDataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterDataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
