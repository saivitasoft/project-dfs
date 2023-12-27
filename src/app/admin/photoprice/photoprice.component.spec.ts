import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotopriceComponent } from './photoprice.component';

describe('PhotopriceComponent', () => {
  let component: PhotopriceComponent;
  let fixture: ComponentFixture<PhotopriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotopriceComponent]
    });
    fixture = TestBed.createComponent(PhotopriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
