import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloBridgeLabzComponent } from './hello-bridge-labz/hello-bridge-labz.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloBridgeLabzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
