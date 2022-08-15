import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'myorg-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrangchuComponent implements OnInit {
 
  option=[
    {
      'backgroundColor':'#29B6F6',
      'text':'Khóa học mở rộng',
      'textcolor':'#fff',
      'flex':'flex-row',
      'icon':'menu_book',
      'iconColor':'#ddd',
      'total': 502
    },
    {
      'backgroundColor':'#EF5350',
      'text':'Khóa học công ty',
      'textcolor':'#fff',
      'flex':'flex-row',
      'icon':'import_contacts',
      'iconColor':'#ddd',
      'total': 7
    },
    {
      'backgroundColor':'#66BB6A',
      'text':'Lộ trình học',
      'textcolor':'#fff',
      'flex':'flex-row',
      'icon':'library_books',
      'iconColor':'#ddd',
      'total': 8
    },
    {
      'backgroundColor':'#5C6BC0',
      'text':'Trắc nghiệm/Khảo sát',
      'textcolor':'#fff',
      'flex':'flex-row',
      'icon':'emoji_events',
      'iconColor':'#ddd',
      'total': 17
    },
    {
      'backgroundColor':'#fff',
      'text':'Học viên',
      'textcolor':'#000',
      'flex':'flex-row-reverse',
      'icon':'person',
      'iconColor':'#66BB6A',
      'total': 28
    },
    {
      'backgroundColor':'#fff',
      'text':'Nhóm học viên',
      'textcolor':'#000',
      'flex':'flex-row-reverse',
      'icon':'groups',
      'iconColor':'#5C6BC0',
      'total': 2
    },
    {
      'backgroundColor':'#fff',
      'text':'Micro-learning',
      'textcolor':'#000',
      'flex':'flex-row-reverse',
      'icon':'auto_stories',
      'iconColor':'#29B6F6',
      'total': 10
    },
    {
      'backgroundColor':'#fff',
      'text':'Khóa học mở rộng',
      'textcolor':'#000',
      'flex':'flex-row-reverse',
      'icon':'analytics',
      'iconColor':'#EF5350',
      'total': 10
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
