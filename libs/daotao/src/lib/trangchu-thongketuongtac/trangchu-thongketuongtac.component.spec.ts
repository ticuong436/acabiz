import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuThongketuongtacComponent } from './trangchu-thongketuongtac.component';

describe('TrangchuThongketuongtacComponent', () => {
  let component: TrangchuThongketuongtacComponent;
  let fixture: ComponentFixture<TrangchuThongketuongtacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrangchuThongketuongtacComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrangchuThongketuongtacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
