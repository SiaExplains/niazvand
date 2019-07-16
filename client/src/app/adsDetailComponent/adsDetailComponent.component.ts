import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ads-detail-component',
  templateUrl: './adsDetailComponent.component.html',
  styleUrls: ['./adsDetailComponent.component.css']
})
export class AdsDetailComponent implements OnInit {

  constructor() { }

  @Input() itemKind: string;
  @Input() location: string;
  @Input() adsKind: string;
  @Input() price: string;
  @Input() imageDirectory: string;

  ngOnInit() {
  }

  src() {
    return `src(${this.imageDirectory})`;
  }

}
