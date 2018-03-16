import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatanodesComponent } from './datanodes.component';

describe('DatanodesComponent', () => {
  let component: DatanodesComponent;
  let fixture: ComponentFixture<DatanodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatanodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatanodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
