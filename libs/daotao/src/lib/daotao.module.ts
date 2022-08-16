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
import { ThuvientailenComponent } from './khoahoc/thuvientailen/thuvientailen.component';
import { ThuvientailenTaomoiComponent } from './khoahoc/thuvientailen-taomoi/thuvientailen-taomoi.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { RouterModule, Routes } from '@angular/router';
import { ThuvientailenScormComponent } from './khoahoc/thuvientailen-scorm/thuvientailen-scorm.component';
import { ThuvientailenThungracComponent } from './khoahoc/thuvientailen-thungrac/thuvientailen-thungrac.component';
import { HocvienComponent } from './hocvien/hocvien.component';

const pageRoute: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'hocvien', component: HocvienComponent },

  {
    path: 'tailieunguon',
    component: ThuvientailenComponent,
  },
  { path: 'tailieunguon/taomoi', component: ThuvientailenTaomoiComponent },
  { path: 'tailieunguon/scorm', component: ThuvientailenScormComponent },
  { path: 'tailieunguon/thungrac', component: ThuvientailenThungracComponent },
];
@NgModule({
  imports: [
    CommonModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NgxFileDropModule,
    RouterModule.forRoot(pageRoute),
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
    ThuvientailenComponent,
    ThuvientailenTaomoiComponent,
    ThuvientailenScormComponent,
    ThuvientailenThungracComponent,
    HocvienComponent,
  ],
  exports: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TrangchuComponent,
    ThuvientailenComponent,
    ThuvientailenTaomoiComponent,
  ],
})
export class DaotaoModule {}
