import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsVedettesComponent } from './forfaits-vedettes.component';

describe('ForfaitsVedettesComponent', () => {
  let component: ForfaitsVedettesComponent;
  let fixture: ComponentFixture<ForfaitsVedettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsVedettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsVedettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
