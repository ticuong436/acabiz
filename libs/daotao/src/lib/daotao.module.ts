import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { MaterialExampleModule } from '@my-org/my-lib';
import { TrangchuThongketongquanComponent } from './trangchu-thongketongquan/trangchu-thongketongquan.component';
import { ContainerComponent } from './main/container/container.component';
import { TrangchuThongketuongtacComponent } from './trangchu-thongketuongtac/trangchu-thongketuongtac.component';
import { TrangchuCachoatdonggandayComponent } from './trangchu-cachoatdongganday/trangchu-cachoatdongganday.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { TrangchuBangxephangComponent } from './trangchu-bangxephang/trangchu-bangxephang.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    NgChartsModule,
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TrangchuComponent,
    TrangchuThongketongquanComponent,
    ContainerComponent,
    TrangchuThongketuongtacComponent,
    TrangchuCachoatdonggandayComponent,
    TrangchuBangxephangComponent,
  ],
  exports: [MainComponent],
})
export class DaotaoModule {}
