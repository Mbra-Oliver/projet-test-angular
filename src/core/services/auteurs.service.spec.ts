import { TestBed } from '@angular/core/testing';

import { AuteursService } from './auteurs.service';

describe('AuteursService', () => {
  let service: AuteursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuteursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
