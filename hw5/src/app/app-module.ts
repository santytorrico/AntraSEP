import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { MaskExtraPipe } from './pipes/mask-extra-pipe';
import { FlightBook } from './flight-book/flight-booker';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [App, Parent, Child, MaskExtraPipe, FlightBook],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
