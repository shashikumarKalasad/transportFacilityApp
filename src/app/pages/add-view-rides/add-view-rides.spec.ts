import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViewRides } from './add-view-rides';

describe('AddViewRides', () => {
  let component: AddViewRides;
  let fixture: ComponentFixture<AddViewRides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddViewRides]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddViewRides);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
