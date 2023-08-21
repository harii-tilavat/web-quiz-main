import { TestBed } from '@angular/core/testing';

import { MeetTheTeamService } from './meet-the-team.service';

describe('MeetTheTeamService', () => {
  let service: MeetTheTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetTheTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
