import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './pages/chatbox/chatbox.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthInterceptor } from './auth-interceptor';
import { SortPipe } from './customPipe/sort.pipe';
import { DatePipe } from '@angular/common';
import { NiceDateFormatPipe } from './customPipe/nice-date-format.pipe';
import { ErrorInterceptor } from './error-interceptor';
import { ScanloginComponent } from './pages/scanlogin/scanlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    LoginComponent,
    SignupComponent,
    SortPipe,
    NiceDateFormatPipe,
    ScanloginComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ZXingScannerModule,

  ],
  providers: [ DatePipe,
  { provide:HTTP_INTERCEPTORS, useClass : ErrorInterceptor,multi:true }
   ],
   
  bootstrap: [AppComponent]
})
export class AppModule {
 }

// {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
