import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRideDialog } from './add-ride-dialog';

describe('AddRideDialog', () => {
  let component: AddRideDialog;
  let fixture: ComponentFixture<AddRideDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRideDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRideDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
