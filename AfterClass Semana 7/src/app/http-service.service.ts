
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  put(url: string, data: any, id: string): Observable<any>{
    return this.http.put(`${url}/${id}`, data);
  }
}
