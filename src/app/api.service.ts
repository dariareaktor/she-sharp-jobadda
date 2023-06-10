import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEvent } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //constructor(private http: HttpClient) { }
  
  
  constructor(private readonly http: HttpClient) { }

  
  test(): Observable<any> {
    return this.http.get(`https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/sourcestack-data-global.json`)
                  
  
  }
  
}

