import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { Home1Component } from './home1/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './topbanner/topbanner.component';
import { CategoryMenuComponent } from './categorymenu/categoryMenu.component';
import { SearchBarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    NavbarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
