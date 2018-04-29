import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencySearchComponent } from './emergency.component';

describe('EmergencySearchComponent', () => {
  let component: EmergencySearchComponent;
  let fixture: ComponentFixture<EmergencySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
