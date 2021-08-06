import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AccountInfo } from '@azure/msal-browser';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  userData: AccountInfo | null = null;
  username: String = '';
  data: String = '';

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.userData = this.authService.userData;
    this.http.get<any>('http://localhost:8080/hello').subscribe(data => {
      this.username = data.username
    })
    this.http.get<any>('http://localhost:8080/api').subscribe(data => {
      this.data = data.data
    })
  }

}
