import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/1080824492259033088');
  }

  getWeatherData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/1083726759991721984');
  }
}
