import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuBangxephangComponent } from './trangchu-bangxephang.component';

describe('TrangchuBangxephangComponent', () => {
  let component: TrangchuBangxephangComponent;
  let fixture: ComponentFixture<TrangchuBangxephangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrangchuBangxephangComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrangchuBangxephangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
