import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnCompComponent } from './my-own-comp.component';

describe('MyOwnCompComponent', () => {
  let component: MyOwnCompComponent;
  let fixture: ComponentFixture<MyOwnCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOwnCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOwnCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
