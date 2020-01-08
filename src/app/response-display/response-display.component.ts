import { Component, OnInit } from '@angular/core';
import 'prismjs/components/prism-json.js';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.css']
})
export class ResponseDisplayComponent implements OnInit {

  constructor() { }

  myJson = JSON.stringify({
    name:"Roman",
    age:"30",
    hobby:"sports programming"
  })

  ngOnInit() {
  }

}
