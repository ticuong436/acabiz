import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuvientailenThungracComponent } from './thuvientailen-thungrac.component';

describe('ThuvientailenThungracComponent', () => {
  let component: ThuvientailenThungracComponent;
  let fixture: ComponentFixture<ThuvientailenThungracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThuvientailenThungracComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThuvientailenThungracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
