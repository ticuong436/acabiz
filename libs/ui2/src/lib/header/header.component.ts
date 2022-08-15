import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'myorg-header2',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input()
  color:any
  @Input()
  plachoderSearch!: string;
  @Input()
  image!:string
  @Input()
  phone!:string
  
  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }
  ngOnInit(): void {}
}
