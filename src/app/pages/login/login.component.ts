import { Component, ElementRef, OnInit, Renderer2, VERSION, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { LoginService } from 'src/app/services/login.service';
import { ScanService } from 'src/app/services/scan.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // @ViewChild('form') userDetail:NgForm

  name='Angular'+ VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel =  NgxQrcodeErrorCorrectionLevels.HIGH;
  value : string = '';

  isScan  = true;
  isLogin : boolean = false;
 
  constructor( private loginService:LoginService, private websocketService:WebsocketService, private _router:Router, private scanService:ScanService ){
    this.loginService.generateJWTToken().subscribe( getToken => {
      this.value = getToken.token
      console.log("getToken ",getToken);
      localStorage.setItem('token', getToken.token)
                  
    })
  }

  ngOnInit(){
    
    this.scanService.currentComponent.subscribe(getDetail => {
      console.log('get***********',getDetail);
      if(getDetail==='login') {
        this.isLogin = true
        this.isScan = false      
        this._router.navigate(['/chat'])
    }
      
    })
    // listen event when scanner scan the code
    this.websocketService.listen('chat').subscribe(isLogin => {
      console.log('islogin in login comopent ',isLogin);
      if(isLogin) 
       {
         this._router.navigate(['/chat'])
       }
      
    })

  }


}