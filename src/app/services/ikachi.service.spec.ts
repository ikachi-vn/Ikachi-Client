import { TestBed } from '@angular/core/testing';

import { IkachiService } from './ikachi.service';

describe('IkachiService', () => {
  let service: IkachiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IkachiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
