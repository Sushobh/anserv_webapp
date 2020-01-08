import { Component, OnInit } from '@angular/core';
import 'prismjs/components/prism-json.js';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.css']
})
export class ResponseDisplayComponent implements OnInit {

  myJson = JSON.stringify({
    name: 'Roman',
    age: '30',
    hobby: 'sports programming'
  });

  constructor(private mainService: MainServiceService) {
    this.mainService.jsonResultSubject.subscribe((any) => {
    });
   }


  ngOnInit() {
  }

}
