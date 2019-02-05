import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciePlantaComponent } from './especie-planta.component';

describe('EspeciePlantaComponent', () => {
  let component: EspeciePlantaComponent;
  let fixture: ComponentFixture<EspeciePlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciePlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciePlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
