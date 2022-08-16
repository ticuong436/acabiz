import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DaotaoModule } from '@myorg/daotao';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule, Routes } from '@angular/router';

const pageRoute: Routes = [
  {
    path: '',
    component: AppComponent,
    loadChildren: () => import('@myorg/daotao').then((m) => m.DaotaoModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DaotaoModule,
    RouterModule.forRoot(pageRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
