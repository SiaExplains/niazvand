import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  navLinks = [
    { path: '/home', label: 'صفحه اصلی' },
    { path: '/advertisement', label: 'ثبت رایگان آگهی' },
    { path: '/rules', label: 'پشتیبانی و قوانین' }
    ];

  constructor() { }

  ngOnInit() {
  }

}
