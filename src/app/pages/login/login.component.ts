import { Component, ElementRef, OnInit, Renderer2, VERSION, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { LoginService } from 'src/app/services/login.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  name='Angular'+ VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel =  NgxQrcodeErrorCorrectionLevels.HIGH;
  value: any;
  constructor( private loginService:LoginService, private websocketService:WebsocketService, private _router:Router ){
    
  }
  ngOnInit(){
    this.loginService.generateJWTToken().subscribe(getToken=>{
      this.value = getToken
      
    })

    // listen event when sccaner scan the code

    this.websocketService.listen('login').subscribe(data=>{
      console.log(data);
      if(data)  this._router.navigate(['/chat'])
      
    })
  }

}