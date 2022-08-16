import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  STT: number;
  kieufile: string;
  tieude: string;
  dungluong: string;
  tinhtrang: string;
  nguoitao: string;
  ngaytao: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    STT: 1,
    kieufile: 'https://acabiz.vn/image-type/link.png',
    tieude: 'Management Skills',
    dungluong: 'Link',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-08-08 11:08:56',
  },
  {
    STT: 2,
    kieufile: 'https://acabiz.vn/image-type/pdf.png',
    tieude: 'Bản vẽ tổng thể lò 2000.pdf',
    dungluong: '293.49 KB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-08-05 16:17:27',
  },
  {
    STT: 3,
    kieufile: 'https://acabiz.vn/image-type/pptx.png',
    tieude: 'Training document - Vietnamese.pptx',
    dungluong: '2.89 MB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-07-21 15:32:34',
  },
  {
    STT: 4,
    kieufile: 'https://acabiz.vn/image-type/docx.png',
    tieude: 'Mẫu 20 DK-TH-NPT - mẫu 2021 - kê khai giảm trừ gia cảnh.docx',
    dungluong: '30.17 KB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '	2022-05-16 14:53:26',
  },
  {
    STT: 5,
    kieufile: 'https://acabiz.vn/image-type/link.png',
    tieude: 'Management Skills',
    dungluong: 'Link',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-08-08 11:08:56',
  },
  {
    STT: 6,
    kieufile: 'https://acabiz.vn/image-type/pdf.png',
    tieude: 'Bản vẽ tổng thể lò 2000.pdf',
    dungluong: '293.49 KB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-08-05 16:17:27',
  },
  {
    STT: 7,
    kieufile: 'https://acabiz.vn/image-type/pptx.png',
    tieude: 'Training document - Vietnamese.pptx',
    dungluong: '2.89 MB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-07-21 15:32:34',
  },
  
];
@Component({
  selector: 'myorg-thuvientailen-thungrac',
  templateUrl: './thuvientailen-thungrac.component.html',
  styleUrls: ['./thuvientailen-thungrac.component.scss'],
})
export class ThuvientailenThungracComponent implements OnInit {
  gallery = false
  data= ELEMENT_DATA
  constructor() {}

  ngOnInit(): void {}
}
