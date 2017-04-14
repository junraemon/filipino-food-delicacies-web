import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'core-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() authenticated: boolean;
  @Input() currentRoute: boolean;
  @Output() signOut = new EventEmitter(false);
  @Output() signIn = new EventEmitter(false);
  constructor() { }

  ngOnInit() {
  }

}
