import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ){}

  ngOnInit(){}

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        console.log("Succeed to login, now redirect to dashboard...");
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'aert-success',
          timeout: 3000});
        this.router.navigate(['dashboard']);
      }
      else {
        console.log("Failed to login, " + data.msg);
        this.flashMessage.show(data.msg, {
          cssClass: 'aert-danger',
          timeout: 3000});
        this.router.navigate(['login']);
      }
    });
  }
}