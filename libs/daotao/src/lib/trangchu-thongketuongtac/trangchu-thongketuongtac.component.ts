import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-trangchu-thongketuongtac',
  templateUrl: './trangchu-thongketuongtac.component.html',
  styleUrls: ['./trangchu-thongketuongtac.component.scss'],
})
export class TrangchuThongketuongtacComponent implements OnInit {
  constructor() {}
  @Input() title!:string;
  @Input() des!:string
  ngOnInit(): void {}
}
