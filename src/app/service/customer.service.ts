import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerDto } from '../dto/CustomerDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly baseUrl =  'http://localhost:8081/Customer';

  constructor(private http:HttpClient) { }

  saveCustomer(customer: CustomerDto): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, customer);
  }


}


