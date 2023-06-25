import { TestBed } from '@angular/core/testing';

import { HttpProjService } from './http-proj.service';

describe('HttpProjService', () => {
  let service: HttpProjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
