import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(public authService: AuthService, router: Router) {
    if (authService.isLoggedIn == true) {
      router.navigate(['home']);
    }
  }

  ngOnInit() { }

}