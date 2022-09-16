import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetailPage } from './vendor-detail.page';

describe('VendorDetailPage', () => {
  let component: VendorDetailPage;
  let fixture: ComponentFixture<VendorDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
