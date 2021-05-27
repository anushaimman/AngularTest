import { TestBed } from '@angular/core/testing';

import { UserDEtailsService } from './user-details.service';

describe('UserDEtailsService', () => {
  let service: UserDEtailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDEtailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
