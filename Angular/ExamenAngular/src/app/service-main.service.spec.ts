import { TestBed } from '@angular/core/testing';

import { ServiceMainService } from './service-main.service';

describe('ServiceMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceMainService = TestBed.get(ServiceMainService);
    expect(service).toBeTruthy();
  });
});
