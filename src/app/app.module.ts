import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeTh from '@angular/common/locales/th';
import localeEn from '@angular/common/locales/en';
// import localeFrExtra from '@angular/common/locales/extra/th';

registerLocaleData(localeTh, 'th');
registerLocaleData(localeEn, 'en');
console.log("AddModule");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'th'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
console.log('End App module');