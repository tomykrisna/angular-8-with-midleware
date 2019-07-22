import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import {ApiService} from '@app/service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  version: string = environment.version;

  constructor(
      private apiService: ApiService) { }

  ngOnInit() {
    // this.insertUser()
  }

  insertUser() {
    let data = {
      number: 1234,
      firstName: 'tomy',
      lastName: 'krisna',
      birthDate: '1995-02-06',
      gender: 'male',
      email: 'aa@bb.cc'
    };

    this.apiService.insertUser(data).subscribe(result => {
      console.log('result insert data', result);
    }, err => {
      console.log('insert error', err);
    });
  }

}



























































