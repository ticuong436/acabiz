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
  image: string;
  Hoten: string;
  sdt:string;
  email: string;
  rule: string;
  tinhtrang:string;
  group: string;
  ngaytao: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    STT: 1,
    image: '',
    Hoten: 'Nguyen Trung Kien',
    email: 'kien@gmail.com',
    sdt:'0123456789',
    rule: 'Admin',
    tinhtrang:'Hoạt động',
    group: 'Nhóm B2B',
    ngaytao: '2022-08-08 11:08:56',
  },
  {
    STT: 2,
    image: '',
    Hoten: 'Nguyen Trung Kien',
    email: 'kien@gmail.com',
    sdt:'0123456789',
    rule: 'Admin',
    tinhtrang:'Hoạt động',
    group: 'Nhóm B2B',
    ngaytao: '2022-08-08 11:08:56',
  },
  {
    STT: 3,
    image: '',
    Hoten: 'Nguyen Trung Kien',
    email: 'kien@gmail.com',
    sdt:'0123456789',
    rule: 'Admin',
    tinhtrang:'Hoạt động',
    group: 'Nhóm B2B',
    ngaytao: '2022-08-08 11:08:56',
  },
  {
    STT: 4,
    image: '',
    Hoten: 'Nguyen Trung Kien',
    email: 'kien@gmail.com',
    sdt:'0123456789',
    rule: 'Admin',
    tinhtrang:'Hoạt động',
    group: 'Nhóm B2B',
    ngaytao: '2022-08-08 11:08:56',
  },
  {
    STT: 5,
    image: '',
    Hoten: 'Nguyen Trung Kien',
    email: 'kien@gmail.com',
    sdt:'0123456789',
    rule: 'Admin',
    tinhtrang:'Hoạt động',
    group: 'Nhóm B2B',
    ngaytao: '2022-08-08 11:08:56',
  }
];

@Component({
  selector: 'myorg-hocvien',
  templateUrl: './hocvien.component.html',
  styleUrls: ['./hocvien.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HocvienComponent implements OnInit {
  gallery = false
  data = ELEMENT_DATA
  displayedColumns: string[] = [
    'select',
    'STT',
    'image',
    'Hoten',
    'email',
    'rule',
    'group',
    'tinhtrang',
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
  ngOnInit(): void {
      
  }
}
