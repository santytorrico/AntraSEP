import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserProfile } from './user-profile/user-profile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Taxlist } from './taxlist/taxlist';
import { Ellipsis } from './ellipsis';
@NgModule({
  declarations: [App, UserProfile, Taxlist, Ellipsis],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  exports: [Taxlist],
  bootstrap: [App],
})
export class AppModule {}
