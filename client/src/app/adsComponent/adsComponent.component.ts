import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-ads-component',
  templateUrl: './adsComponent.component.html',
  styleUrls: ['./adsComponent.component.css']
})
export class AdsComponent implements OnInit {

  constructor() { }

  @Input() linkTo: string;
  @Input() imageDirectory: string;
  @Input() header: string;
  @Input() moreInfo: string;

  ngOnInit() {
  }

  url() {
    return `url(${this.linkTo})`;
  }

  src() {
    return `src(${this.imageDirectory})`;
  }

}
