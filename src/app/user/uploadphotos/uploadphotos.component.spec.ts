import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadphotosComponent } from './uploadphotos.component';

describe('UploadphotosComponent', () => {
  let component: UploadphotosComponent;
  let fixture: ComponentFixture<UploadphotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadphotosComponent]
    });
    fixture = TestBed.createComponent(UploadphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
