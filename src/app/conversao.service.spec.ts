import { TestBed } from '@angular/core/testing';

import { ConversaoService } from './conversao.service';

describe('ConversaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversaoService = TestBed.get(ConversaoService);
    expect(service).toBeTruthy();
  });
});
