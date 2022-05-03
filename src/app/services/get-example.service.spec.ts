import { TestBed } from '@angular/core/testing';

import { GetExampleService } from './get-example.service';

describe('GetExampleService', () => {
  let service: GetExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
