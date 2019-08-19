import { TestBed, inject } from '@angular/core/testing';

import { CsharpFrameworkService } from './csharp-framework.service';

describe('CsharpFrameworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsharpFrameworkService]
    });
  });

  it('should be created', inject([CsharpFrameworkService], (service: CsharpFrameworkService) => {
    expect(service).toBeTruthy();
  }));
});
