import { TestBed } from '@angular/core/testing';

import { FullScheduleService } from './full-schedule.service';

describe('FullScheduleService', () => {
  let service: FullScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
