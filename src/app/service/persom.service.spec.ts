import { TestBed } from '@angular/core/testing';

import { PersomService } from './persom.service';

describe('PersomService', () => {
  let service: PersomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
