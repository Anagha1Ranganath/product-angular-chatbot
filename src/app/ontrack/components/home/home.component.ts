import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  Login() {
    this.route.navigate(['/' , 'login']);
  }
  Signup() {
    this.route.navigate(['/' , 'Signup']);
  }
}
