import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  @Input() phone!: string
  ngOnInit(): void {}
}
