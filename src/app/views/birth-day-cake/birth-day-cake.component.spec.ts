import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDayCakeComponent } from './birth-day-cake.component';

describe('BirthDayCakeComponent', () => {
  let component: BirthDayCakeComponent;
  let fixture: ComponentFixture<BirthDayCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthDayCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthDayCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
