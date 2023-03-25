import { TestBed } from '@angular/core/testing';

import { AvilandGuardGuard } from './aviland-guard.guard';

describe('AvilandGuardGuard', () => {
  let guard: AvilandGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AvilandGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
