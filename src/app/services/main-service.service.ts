import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MethodTemplate } from '../network-request-classes/method-template';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  port = 8080;
  jsonResultSubject: Subject<String> = new Subject<String>();
  methodClick: Subject<String> = new Subject<String>();

  constructor(private httpClient: HttpClient) {

  }

  public getMethods(): Observable<String[]> {
      return this.httpClient.get<String[]>(`http://localhost:${this.port}/getmethods`);
  }

  public getMethodsInfo(methodName: String): Observable<MethodTemplate> {
    return this.httpClient.post<MethodTemplate>(`http://localhost:${this.port}/getmethodinfo`, {
      methodName : methodName
    });
  }

  public executeMethod(postBody: any, methodName : String): Observable<any> {
    return this.httpClient.post(`http://localhost:${this.port}/${methodName}`, postBody);
  }

}
