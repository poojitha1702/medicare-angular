import { Injectable } from '@angular/core';
import { BasicServiceService } from './basic-service.service';
import { User } from '../Bean/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedinUser : boolean =false;
validUser: boolean = true;
userRole: string;
userId : number;
userName:string;
isdoctor:boolean;
ispatient:boolean;

  constructor(private basicService : BasicServiceService, private router : Router) { }

  authenticateUser(user : any){
    this.basicService.login(user.username, user.password).subscribe(
(data)=>{
    this.loggedinUser=true;
    this.validUser=true;
    this.basicService.setToken(data.token);
    this.userRole = data.role;
    this.userId=+(data.id);
    this.userName=data.name;
    this.basicService.setUserName(this.userName);
    this.basicService.setUserId(data.id);
    if(this.userRole=="admin"){
      this.router.navigate(['admin']);
    }
    else if(this.userRole=="doctor"){
      this.isdoctor=true;
      this.router.navigate(['doctor']);
    }
    else if(this.userRole=="patient") {
      this.ispatient=true;
      this.router.navigate(['patient']);
    }

},

(error) => {
  this.validUser = false;
}
    )
  }

  logOut() {
    this.basicService.setToken(null);
    this.loggedinUser = false;
    this.isdoctor=false;
    this.ispatient=false;
    this.router.navigate(["/login"]);
  }
}
