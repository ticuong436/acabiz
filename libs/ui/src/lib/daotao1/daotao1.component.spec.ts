import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Daotao1Component } from './daotao1.component';

describe('Daotao1Component', () => {
  let component: Daotao1Component;
  let fixture: ComponentFixture<Daotao1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Daotao1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Daotao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
