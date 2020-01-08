import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-method-info',
  templateUrl: './method-info.component.html',
  styleUrls: ['./method-info.component.css']
})
export class MethodInfoComponent implements OnInit {


  requestTemplate = {
    name : 'asd',
    age : '234ew',
    alive : 'sadsd',
    profession : '123123'
  }

  postBody = {

  }


  constructor(private mainService: MainServiceService) { }

  ngOnInit() {
     this.mainService.methodClick.subscribe(() => {
     });
  }

  clickedOnSubmit() {
    console.log(this.postBody);
  }

}
