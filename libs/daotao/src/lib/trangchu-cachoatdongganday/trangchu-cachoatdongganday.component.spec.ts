import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuCachoatdonggandayComponent } from './trangchu-cachoatdongganday.component';

describe('TrangchuCachoatdonggandayComponent', () => {
  let component: TrangchuCachoatdonggandayComponent;
  let fixture: ComponentFixture<TrangchuCachoatdonggandayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrangchuCachoatdonggandayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrangchuCachoatdonggandayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
