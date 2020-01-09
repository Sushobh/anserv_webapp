import { Component, OnInit } from '@angular/core';
import 'prismjs/components/prism-json.js';
import { MainServiceService } from '../services/main-service.service';
import { CodeHighlightService } from '../services/code-highlight.service';



@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.css']
})

export class ResponseDisplayComponent implements OnInit {

  myJson = '';
  codereceived = false;

  constructor(private mainService: MainServiceService) {
    this.mainService.jsonResultSubject.subscribe((any: string) => {
      this.codereceived = false;
      setTimeout(() => {
        let jsonPretty = '';
        this.myJson = JSON.stringify(JSON.parse(any),null,4); 
        this.codereceived = true;
        console.log(this.myJson);
      }, 100);
    });
   }


  ngOnInit() {
  }

}
