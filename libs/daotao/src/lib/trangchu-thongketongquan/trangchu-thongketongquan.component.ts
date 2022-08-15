import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-trangchu-thongketongquan',
  templateUrl: './trangchu-thongketongquan.component.html',
  styleUrls: ['./trangchu-thongketongquan.component.scss'],
})
export class TrangchuThongketongquanComponent implements OnInit {
  @Input() backgroundColor!: string;
  @Input() text!: string;
  @Input() textcolor!: string;
  @Input() iconColor!: string;
  @Input() icon!: string;
  @Input() total!: number;
  @Input() flex!: string;

  constructor() {}

  ngOnInit(): void {}
}
