import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuThongketongquanComponent } from './trangchu-thongketongquan.component';

describe('TrangchuThongketongquanComponent', () => {
  let component: TrangchuThongketongquanComponent;
  let fixture: ComponentFixture<TrangchuThongketongquanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrangchuThongketongquanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrangchuThongketongquanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
