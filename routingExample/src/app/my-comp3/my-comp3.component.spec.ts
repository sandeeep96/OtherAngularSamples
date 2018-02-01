import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3Component } from './my-comp3.component';

describe('MyComp3Component', () => {
  let component: MyComp3Component;
  let fixture: ComponentFixture<MyComp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
