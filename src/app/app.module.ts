import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { ProfService } from './services/prof.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfComponent } from './componets/prof/prof.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
