import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuvientailenTaomoiComponent } from './thuvientailen-taomoi.component';

describe('ThuvientailenTaomoiComponent', () => {
  let component: ThuvientailenTaomoiComponent;
  let fixture: ComponentFixture<ThuvientailenTaomoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThuvientailenTaomoiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThuvientailenTaomoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
