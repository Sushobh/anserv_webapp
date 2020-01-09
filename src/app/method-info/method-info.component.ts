import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';
import { switchMap } from 'rxjs/operators';
import { MethodTemplate } from '../network-request-classes/method-template';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-method-info',
  templateUrl: './method-info.component.html',
  styleUrls: ['./method-info.component.css'],
  providers: [MessageService]
})
export class MethodInfoComponent implements OnInit {


  methodTemplate: MethodTemplate = null;

  postBody = {

  };
  errorMessageToastKey = 'errorMessageToastKey';
  constructor(private mainService: MainServiceService, private messageService: MessageService) { }

  ngOnInit() {
     this.mainService.methodClick.pipe(switchMap((methodName: String) => {
          return  this.mainService.getMethodsInfo(methodName);
     })).subscribe((methodTemplate: MethodTemplate) => {
        this.methodTemplate = methodTemplate;
     });
  }

  clickedOnSubmit() {
     this.mainService.executeMethod(this.postBody, this.methodTemplate.methodName)
       .subscribe((res: MethodTemplate) => {
          this.mainService.jsonResultSubject.next(JSON.stringify(res));
       }, (error) => {
        this.messageService.clear(this.errorMessageToastKey);
        this.messageService.add({key : this.errorMessageToastKey,
          severity: 'error', summary: 'Invalid Request.', detail: 'Invalid Request,make sure you enter correct params.'});
       });
  }

}
