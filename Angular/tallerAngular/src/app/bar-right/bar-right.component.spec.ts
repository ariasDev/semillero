import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRightComponent } from './bar-right.component';

describe('BarRightComponent', () => {
  let component: BarRightComponent;
  let fixture: ComponentFixture<BarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
