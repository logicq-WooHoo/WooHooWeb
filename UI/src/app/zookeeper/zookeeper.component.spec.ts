import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZookeeperComponent } from './zookeeper.component';

describe('ZookeeperComponent', () => {
  let component: ZookeeperComponent;
  let fixture: ComponentFixture<ZookeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZookeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZookeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
