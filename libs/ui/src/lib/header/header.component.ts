import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input()
  color:any
  @Input()
  href!: string;
  @Input()
  target?: '_self' | '_blank' | '_parent' | '_top' = '_self';
  
  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }
  ngOnInit(): void {}
}
