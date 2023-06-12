import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeNavBarComponent } from './home/home-nav-bar/home-nav-bar.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';
import { HomeHeaderMastheadComponent } from './home/home-header-masthead/home-header-masthead.component';
import { AboutComponent } from './home/home-body/sections/about/about.component';
import { ServiceComponent } from './home/home-body/sections/service/service.component';
import { ContactComponent } from './home/home-body/sections/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeNavBarComponent,
    HomeBodyComponent,
    HomeHeaderMastheadComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
