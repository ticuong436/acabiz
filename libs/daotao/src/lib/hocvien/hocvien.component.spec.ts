import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocvienComponent } from './hocvien.component';

describe('HocvienComponent', () => {
  let component: HocvienComponent;
  let fixture: ComponentFixture<HocvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HocvienComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HocvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
