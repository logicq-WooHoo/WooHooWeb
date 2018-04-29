import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightlifeSearchComponent } from './nightlife.component';

describe('NightlifeSearchComponent', () => {
  let component: NightlifeSearchComponent;
  let fixture: ComponentFixture<NightlifeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightlifeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightlifeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
