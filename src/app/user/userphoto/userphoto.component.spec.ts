import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserphotoComponent } from './userphoto.component';

describe('UserphotoComponent', () => {
  let component: UserphotoComponent;
  let fixture: ComponentFixture<UserphotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserphotoComponent]
    });
    fixture = TestBed.createComponent(UserphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
