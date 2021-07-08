import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ScanService } from 'src/app/services/scan.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-scanlogin',
  templateUrl: './scanlogin.component.html',
  styleUrls: ['./scanlogin.component.css']
})
 
export class ScanloginComponent implements OnInit {
  scannerEnabled: boolean = true;
  resetEnabled: boolean = false;
  token: any;
  
  constructor( private loginService:LoginService, private websocketService:WebsocketService, private scanService:ScanService, private _router:Router ) {
   console.log('Scanner Section');
    
  }

  ngOnInit() {
   
  }

  onLoginEventFire() {
    console.log('click ');
    this.websocketService.emit('login',true)
    this.scanService.changeCompoent('login')
    this.websocketService.listen('chat').subscribe(isLogin => {
      console.log('islogin in login comopent ',isLogin);
      if(isLogin) 
       {
         this._router.navigate(['/chat'])
       }
      
    })

  }


  // Get Scanner
  onCodeResult(value){
    console.log('oncoderesult : ',value);
    // get Scan value
    if(value){
      this.scannerEnabled = false;
      this.resetEnabled = true;
      
      // get details from value (token) in backend

      this.loginService.getDetailFromToken(value).subscribe( getUserDetail => {
        // this output show in mobile app browser
        console.log('userdetail from token : ', getUserDetail);
        if(getUserDetail) {
          console.log('fire emit ');

          
        }
      
        // if token right then change url
        // **********implement remaining
        

      })

      // emit event on login component
      // this.websocketService.emit('login',true)
      
    }
    
  }

  // Reset the scanner again
  onResetButtton(){
    this.scannerEnabled = true;
    this.resetEnabled = false;

  }

}

