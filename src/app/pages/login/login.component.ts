import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'loginPage',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  user: User;
  userName: string;
  password: string;
  errMsg: string;
  randomQuote: string;

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser()
      .then(user => this.user = user);
  }

  login(): void {
    this.userService.login(this.userName, this.password) 
			.subscribe(
				data => {
          if(data["err"] && data["err"] != ''){
            console.log('An error occured: ', data["err"]);
            this.errMsg = data["err"];
          } else {
            this.user.name = data["name"];
						this.user.password = this.password;
            this.user.isLoggedIn = true;
            this.user.address = data["address"];
            this.userService.setUser(this.user);
          }
        },
				err => { this.errMsg = err.Message; }
			);
  }

  register(): void {
    this.userService.register(this.userName, this.password) 
			.subscribe(
				data => {
          if(data["err"] && data["err"] != ''){
            console.log('An error occured: ', data["err"]);
            this.errMsg = data["err"];
          } else {
            this.user.name = data["name"];
            this.user.isLoggedIn = true;
            this.user.address = data["address"];
          }
        },
				err => { this.errMsg = err.Message; }
			);
  }
}