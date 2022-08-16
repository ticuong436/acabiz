import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  {
    STT: 8,
    kieufile: 'https://acabiz.vn/image-type/docx.png',
    tieude: 'Mẫu 20 DK-TH-NPT - mẫu 2021 - kê khai giảm trừ gia cảnh.docx',
    dungluong: '30.17 KB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '	2022-05-16 14:53:26',
  },
  {
    STT: 9,
    kieufile: 'https://acabiz.vn/image-type/link.png',
    tieude: 'Management Skills',
    dungluong: 'Link',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-08-08 11:08:56',
  },
  {
    STT: 10,
    kieufile: 'https://acabiz.vn/image-type/pdf.png',
    tieude: 'Bản vẽ tổng thể lò 2000.pdf',
    dungluong: '293.49 KB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-08-05 16:17:27',
  },
  {
    STT: 11,
    kieufile: 'https://acabiz.vn/image-type/pptx.png',
    tieude: 'Training document - Vietnamese.pptx',
    dungluong: '2.89 MB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '2022-07-21 15:32:34',
  },
  {
    STT: 12,
    kieufile: 'https://acabiz.vn/image-type/docx.png',
    tieude: 'Mẫu 20 DK-TH-NPT - mẫu 2021 - kê khai giảm trừ gia cảnh.docx',
    dungluong: '30.17 KB',
    tinhtrang: 'Hoàn thành',
    nguoitao: 'Anh Khương',
    ngaytao: '	2022-05-16 14:53:26',
  },
];
@Component({
  selector: 'myorg-thuvientailen',
  templateUrl: './thuvientailen.component.html',
  styleUrls: ['./thuvientailen.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThuvientailenComponent implements OnInit, AfterViewInit {
  gallery = false
  data = ELEMENT_DATA
  displayedColumns: string[] = [
    'select',
    'STT',
    'type',
    'tieude',
    'dungluong',
    'tinhtrang',
    'nguoitao',
    'ngaytao',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.STT + 1
    }`;
  }
  ngOnInit(): void {}
}
