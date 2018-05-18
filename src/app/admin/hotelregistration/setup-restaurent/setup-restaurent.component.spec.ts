import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupRestaurentComponent } from './setup-restaurent.component';

describe('SetupRestaurentComponent', () => {
  let component: SetupRestaurentComponent;
  let fixture: ComponentFixture<SetupRestaurentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupRestaurentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
