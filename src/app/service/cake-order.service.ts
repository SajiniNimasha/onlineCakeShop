import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import { CakeOrderDto } from '../dto/CakeOrderDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeOrderService {

  readonly baseUrl =  'http://localhost:8081/CakeOrder';

  constructor(private http:HttpClient) {}


  getAllCakeOrder():Observable<CakeOrderDto[]>{
    return this.http.get<CakeOrderDto[]>(this.baseUrl);
  }


  
}
