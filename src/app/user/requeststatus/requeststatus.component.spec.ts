import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeststatusComponent } from './requeststatus.component';

describe('RequeststatusComponent', () => {
  let component: RequeststatusComponent;
  let fixture: ComponentFixture<RequeststatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequeststatusComponent]
    });
    fixture = TestBed.createComponent(RequeststatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
