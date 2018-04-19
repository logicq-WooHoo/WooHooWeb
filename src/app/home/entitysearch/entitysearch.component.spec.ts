import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySearchComponent } from './entitysearch.component';

describe('BasicSearchComponent', () => {
  let component: EntitySearchComponent;
  let fixture: ComponentFixture<EntitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
