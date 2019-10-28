import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCakeComponent } from './special-cake.component';

describe('SpecialCakeComponent', () => {
  let component: SpecialCakeComponent;
  let fixture: ComponentFixture<SpecialCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
