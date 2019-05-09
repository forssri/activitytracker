import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteractivityComponent } from './filteractivity.component';

describe('FilteractivityComponent', () => {
  let component: FilteractivityComponent;
  let fixture: ComponentFixture<FilteractivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteractivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteractivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
