import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatboxComponent } from './pages/chatbox/chatbox.component';
import { LoginComponent } from './pages/login/login.component';
import { ScanloginComponent } from './pages/scanlogin/scanlogin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'', component:ScanloginComponent },
  {path:'login', component:LoginComponent },
  {path:'chat',component:ChatboxComponent },
  {path:'signup',component:SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
