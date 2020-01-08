import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import { MainServiceService as MainService } from '../services/main-service.service';

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.css']
})
export class MethodListComponent implements OnInit {

  methodList: string[] = ['add method', 'get method', 'post method', 'update method'];
  methodListDisplay = this.methodList;

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  onSearchChange(searchValue: string): void {
       if (searchValue.length === 0) {
         this.methodListDisplay = this.methodList;
       } else {
        this.methodListDisplay = this.methodList.filter((item: String) => {
          return item.startsWith(searchValue);
        });
       }
  }

  clickedOn(methodName : String){
    this.mainService.methodClick.next(methodName)
  }



}
