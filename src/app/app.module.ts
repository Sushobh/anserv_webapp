import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import { MethodListComponent } from './method-list/method-list.component';
import { MethodInfoComponent } from './method-info/method-info.component';
import { ResponseDisplayComponent } from './response-display/response-display.component';
import { MainHolderComponent } from './main-holder/main-holder.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MethodListComponent,
    MethodInfoComponent,
    ResponseDisplayComponent,
    MainHolderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    ToastModule,
    RouterModule.forRoot(
      [],
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
