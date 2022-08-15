import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  giangvien: string;
  avatar: string;
  khoahoc: string;
  image: string;
  hocvien: number;
  des:string
}
@Component({
  selector: 'myorg-trangchu-bangxephang',
  templateUrl: './trangchu-bangxephang.component.html',
  styleUrls: ['./trangchu-bangxephang.component.scss'],
})
export class TrangchuBangxephangComponent implements OnInit {
  constructor() {}
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'image',
    'avatar',
    'khoahoc',
    'hocvien',
    
  ];
  ngOnInit(): void {}
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    giangvien: 'Hydrogen',
    khoahoc: 's',
    avatar: 'H',
    image: 'https://acabiz.vn/images/cup-01.png',
    hocvien: 5,
    des:'ssss'
  },
];
