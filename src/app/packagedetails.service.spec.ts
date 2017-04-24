/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PackagedetailsService } from './packagedetails.service';

describe('PackagedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagedetailsService]
    });
  });

  it('should ...', inject([PackagedetailsService], (service: PackagedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
