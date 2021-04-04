import { TestBed } from '@angular/core/testing';

import { HttpCommunicatorService } from './http-communicator.service';

describe('HttpCommunicatorService', () => {
  let service: HttpCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
