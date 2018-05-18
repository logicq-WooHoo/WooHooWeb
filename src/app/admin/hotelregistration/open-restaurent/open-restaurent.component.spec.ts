import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRestaurentComponent } from './open-restaurent.component';

describe('OpenRestaurentComponent', () => {
  let component: OpenRestaurentComponent;
  let fixture: ComponentFixture<OpenRestaurentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRestaurentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
