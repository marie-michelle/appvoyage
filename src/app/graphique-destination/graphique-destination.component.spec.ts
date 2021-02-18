import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueDestinationComponent } from './graphique-destination.component';

describe('GraphiqueDestinationComponent', () => {
  let component: GraphiqueDestinationComponent;
  let fixture: ComponentFixture<GraphiqueDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiqueDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiqueDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
