import { Component, ElementRef, OnInit, Renderer2, VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { LoginService } from 'src/app/services/login.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('form') userDetail:NgForm

  name='Angular'+ VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel =  NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.npmjs.com/package/angularx-qrcode';

  constructor(){
    
  }

  // token:string;
  // message:string='';

  // constructor(private router:Router,private loginService:LoginService,private websocketService:WebsocketService) { }

  // ngOnInit(): void {
  //   this.token=localStorage.getItem('token')
  //   if(this.token){
  //     this.router.navigate(['/chat'])
  //   }
  // }




//   getUserDetail(){
//     // check user input field required
//     console.log(this.userDetail.value);

//     if(this.userDetail.valid){
//       this.loginService.loginUser(this.userDetail.value).subscribe(response=>{
//         // not vaild id
//         if(!response.token){
//           this.message=response.user
//           console.log('eroor in login : ',response);
//           this.router.navigate(['/'])
//             return
//         }
//           console.log('login sucessfully!')
//           this.message=''
//            // add JWT Token in localstorage for validation
//              localStorage.setItem('token', response.token)

//             this.websocketService.emit('joinRoom',response.user)
//             this.router.navigate(['/chat'])
//       })
//     }
//     else{
//       this.router.navigate(['/'])
//     }
//  }

}
