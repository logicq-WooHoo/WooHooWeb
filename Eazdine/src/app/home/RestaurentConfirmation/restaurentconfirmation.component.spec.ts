import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentConfirmationComponent } from './restaurentconfirmation.component';

describe('BasicSearchComponent', () => {
  let component: RestaurentConfirmationComponent;
  let fixture: ComponentFixture<RestaurentConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
