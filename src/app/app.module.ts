import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "@angular/flex-layout";
import {MatButtonModule, MatIconModule} from "@angular/material";
import {HolidayInnModule} from "./holiday-inn/holiday-inn.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      CoreModule,

      HolidayInnModule
  ],
  exports: [
      MatButtonModule,
      MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
