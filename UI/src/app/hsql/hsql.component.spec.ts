import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsqlComponent } from './hsql.component';

describe('HsqlComponent', () => {
  let component: HsqlComponent;
  let fixture: ComponentFixture<HsqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
