import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesVedetteComponent } from './fiches-vedette.component';

describe('FichesVedetteComponent', () => {
  let component: FichesVedetteComponent;
  let fixture: ComponentFixture<FichesVedetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesVedetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesVedetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
