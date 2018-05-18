import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentDetailsComponent } from './restaurent-details.component';

describe('RestaurentDetailsComponent', () => {
  let component: RestaurentDetailsComponent;
  let fixture: ComponentFixture<RestaurentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
