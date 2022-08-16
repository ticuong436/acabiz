import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuvientailenComponent } from './thuvientailen.component';

describe('ThuvientailenComponent', () => {
  let component: ThuvientailenComponent;
  let fixture: ComponentFixture<ThuvientailenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThuvientailenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThuvientailenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
