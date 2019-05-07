import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  googleLogin() {
    this.authService.doGoogleLogin().then(user => {
      console.log(user);
      this.user = user;
    });
  }
}
