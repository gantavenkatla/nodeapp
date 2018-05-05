import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceVehicleComponent } from './replace-vehicle.component';

describe('ReplaceVehicleComponent', () => {
  let component: ReplaceVehicleComponent;
  let fixture: ComponentFixture<ReplaceVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
