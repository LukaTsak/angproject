import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getData(url :string) {
    const headers = {
      'x-api-key': 'reqres-free-v1'
    };
  
    return this.http.get(url, { headers });
  }
  
}
