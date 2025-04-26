import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  constructor(private apihelper : ApiService) { }

  passData() {
    return this.apihelper.getData('https://reqres.in/api/users');
  }
  
  }