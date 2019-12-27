import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  loginClicked() {
    this.messageService.clear('loginResultToast')
    this.messageService.add({key : 'loginResultToast',severity:'error', summary:'Login Failed', detail:'Invalid Credentials'});
  }

}
