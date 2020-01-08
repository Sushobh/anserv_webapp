import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  clickedOnSubmit(){
    console.log(this.postBody)
  }

}
