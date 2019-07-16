import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TabsComponent } from './navigation/tabs/tabs.component';
import { NavSideComponent } from './navigation/nav-side/nav-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './adsComponent/adsComponent.component';
import { AdDetailComponent } from './home/ad-detail/ad-detail.component';
import { AdsDetailComponent } from './adsDetailComponent/adsDetailComponent.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    TabsComponent,
    NavSideComponent,
    HomeComponent,
    RulesComponent,
    AdvertisementComponent,
    FooterComponent,
    AdsComponent,
    AdDetailComponent,
    AdsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
