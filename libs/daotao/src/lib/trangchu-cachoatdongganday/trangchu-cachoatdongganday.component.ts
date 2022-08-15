import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'myorg-trangchu-cachoatdongganday',
  templateUrl: './trangchu-cachoatdongganday.component.html',
  styleUrls: ['./trangchu-cachoatdongganday.component.scss'],
})
export class TrangchuCachoatdonggandayComponent implements OnInit {
  constructor() {}
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Lượt tham gia học A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'transparent'
      },
      {
        data: [ 65, 23, 52, 32, 56, 55, 40 ],
        label: 'Số video hoàn thành',
        fill: true,
        tension: 0.5,
        borderColor: 'yellow',
        backgroundColor: 'transparent'
      },
      {
        data: [ 65, 31, 52, 32, 32, 55, 41 ],
        label: 'Số giờ xem video',
        fill: true,
        tension: 0.5,
        borderColor: 'red',
        backgroundColor: 'transparent'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  ngOnInit(): void {}
}
