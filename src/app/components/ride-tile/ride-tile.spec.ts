import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideTile } from './ride-tile';

describe('RideTile', () => {
  let component: RideTile;
  let fixture: ComponentFixture<RideTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
