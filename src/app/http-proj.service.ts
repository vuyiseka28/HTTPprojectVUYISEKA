import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProjService {
  nameGet: string = 'https://api.agify.io?name=vuyiseka';

  constructor(private httpName: HttpClient) {}

  getName(): Observable<any> {
    return this.httpName.get(this.nameGet);
  }
}