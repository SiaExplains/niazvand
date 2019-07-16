import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDetailComponent } from './adsDetailComponent.component';

describe('AdsDetailComponent', () => {
  let component: AdsDetailComponent;
  let fixture: ComponentFixture<AdsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
