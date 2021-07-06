import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { map } from 'rxjs/operators'
import { SortPipe } from './../../customPipe/sort.pipe';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})

export class ChatboxComponent implements OnInit {

  constructor(private websocketService:WebsocketService,private loginService:LoginService,private router:Router){}
  userData=[];
  activeUserName:any=[];
  typing=false;
  sortPipe=new SortPipe()

  ngOnInit(){

    console.log(localStorage.getItem('token'))
    if(!localStorage.getItem('token'))
    {
      console.log('not gettoken');

      this.router.navigate(["/"])
      return
    }
    // get all messages
    this.loginService.getAllMessages(localStorage.getItem('token')).subscribe(response=>{
      console.log('all messages ',response);
      // response.sort((val1.date,va))
      this.userData=response.messages
      console.log('userdata :*****',this.userData);
     console.log('test*******',this.userData[0]);


    })


    // get Messages from server
    this.websocketService.listen('message').subscribe(data=>{
      if(data){
        this.loginService.getAllMessages(localStorage.getItem('token')).subscribe(response=>{
            console.log('all messages2 ',response);
            // response.sort((val1.date,va))
            this.userData=response.messages
          })
      }

      // this.userData.push(data)

      // console.log('userdate :',this.userData);

    // sort pipe use in ts file
      // let result =this.sortPipe.transform(this.userData)
      // console.log('******result sortpipe ****',result);


      // get active user name
      this.loginService.getActiveUserName().subscribe(response=>{
        this.activeUserName=response
      })
    })

    // get active user name
    this.loginService.getActiveUserName().subscribe(response=>{
        console.log('get active username ',response)
        this.activeUserName=response
      })
    }

  // get chat box messages
  getInput(umsg){
     let date=new Date(Date.now())
     console.log('utc*********',date.toUTCString());

     let sendDetail={sendMessages:umsg.value,date:date}
     this.websocketService.emit('getmessage',sendDetail)

     umsg.value='';
     this.typing=false;
    }

  // show message when user typing
  onUserTyping(){
    console.log('userstop typing');
   this.typing=true
   setTimeout(()=>{
     this.typing=false
    },6000)
  }
// for replay
OnGetId(id){
  console.log(id);
}

  // logout to user
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(["/"])
  }

}
