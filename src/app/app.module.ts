import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

const config: SocketIoConfig = { url: '', options: {} };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule, SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
