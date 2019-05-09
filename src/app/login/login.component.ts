import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {
  currentUser: User;
  destroyed = new Subject();
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.user$.pipe(takeUntil(this.destroyed)).subscribe(user => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
  }
}
