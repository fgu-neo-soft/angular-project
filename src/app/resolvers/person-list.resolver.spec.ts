import { TestBed } from '@angular/core/testing';

import { PersonListResolver } from './person-list.resolver';

describe('PersonListResolver', () => {
  let resolver: PersonListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PersonListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
