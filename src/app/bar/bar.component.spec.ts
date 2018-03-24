import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSearchComponent } from './bar.component';

describe('BarSearchComponent', () => {
  let component: BarSearchComponent;
  let fixture: ComponentFixture<BarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
