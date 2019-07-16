import { Component, OnInit, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.css']
})
export class NavSideComponent implements OnInit {


  @Output() closeSideNavigation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleClose() {
    this.closeSideNavigation.emit();
  }

}
