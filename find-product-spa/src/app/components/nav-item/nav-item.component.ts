import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink : string | any[] = '/';
  @Output() activate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
