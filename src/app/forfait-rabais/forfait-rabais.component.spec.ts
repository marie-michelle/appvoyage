import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitRabaisComponent } from './forfait-rabais.component';

describe('ForfaitRabaisComponent', () => {
  let component: ForfaitRabaisComponent;
  let fixture: ComponentFixture<ForfaitRabaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitRabaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitRabaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
