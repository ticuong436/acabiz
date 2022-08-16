import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuvientailenScormComponent } from './thuvientailen-scorm.component';

describe('ThuvientailenScormComponent', () => {
  let component: ThuvientailenScormComponent;
  let fixture: ComponentFixture<ThuvientailenScormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThuvientailenScormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThuvientailenScormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
