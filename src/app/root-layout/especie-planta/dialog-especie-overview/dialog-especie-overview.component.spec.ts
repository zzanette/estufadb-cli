import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEspecieOverviewComponent } from './dialog-especie-overview.component';

describe('DialogEspecieOverviewComponent', () => {
  let component: DialogEspecieOverviewComponent;
  let fixture: ComponentFixture<DialogEspecieOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEspecieOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEspecieOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
