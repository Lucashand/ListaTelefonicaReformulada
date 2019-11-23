import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './localStorage.service';

describe('ConversaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });
});
