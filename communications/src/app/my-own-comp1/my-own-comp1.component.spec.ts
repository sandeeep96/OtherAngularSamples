import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnComp1Component } from './my-own-comp1.component';

describe('MyOwnComp1Component', () => {
  let component: MyOwnComp1Component;
  let fixture: ComponentFixture<MyOwnComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOwnComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOwnComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
