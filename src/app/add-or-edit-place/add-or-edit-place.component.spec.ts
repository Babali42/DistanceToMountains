import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditPlaceComponent } from './add-or-edit-place.component';

describe('AddOrEditPlaceComponent', () => {
  let component: AddOrEditPlaceComponent;
  let fixture: ComponentFixture<AddOrEditPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
