import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marcador2Component } from './marcador2.component';

describe('Marcador2Component', () => {
  let component: Marcador2Component;
  let fixture: ComponentFixture<Marcador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Marcador2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Marcador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
