import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuHoatdonggandayComponent } from './trangchu-hoatdongganday.component';

describe('TrangchuHoatdonggandayComponent', () => {
  let component: TrangchuHoatdonggandayComponent;
  let fixture: ComponentFixture<TrangchuHoatdonggandayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrangchuHoatdonggandayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrangchuHoatdonggandayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
