import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiquePrixComponent } from './graphique-prix.component';

describe('GraphiquePrixComponent', () => {
  let component: GraphiquePrixComponent;
  let fixture: ComponentFixture<GraphiquePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiquePrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiquePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
