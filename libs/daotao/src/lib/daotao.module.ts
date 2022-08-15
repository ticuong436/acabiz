import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { MyLibModule, MaterialExampleModule } from '@my-org/my-lib';
import { TrangchuThongketongquanComponent } from './trangchu-thongketongquan/trangchu-thongketongquan.component';
import { ContainerComponent } from './main/container/container.component';
import { TrangchuThongketuongtacComponent } from './trangchu-thongketuongtac/trangchu-thongketuongtac.component';
import { TrangchuCachoatdonggandayComponent } from './trangchu-cachoatdongganday/trangchu-cachoatdongganday.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [CommonModule, MyLibModule,MaterialExampleModule, BrowserAnimationsModule],
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TrangchuComponent,
    TrangchuThongketongquanComponent,
    ContainerComponent,
    TrangchuThongketuongtacComponent,
    TrangchuCachoatdonggandayComponent,
  ],
})
export class DaotaoModule {}
