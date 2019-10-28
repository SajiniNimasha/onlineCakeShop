import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeItemDto } from '../dto/CakeItemDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeItemService {
  readonly baseUrl =  'http://localhost:8081/CakeItem';

  constructor(private http:HttpClient) { }

  getAllCakeItem(): Observable<CakeItemDto[]> {
    return this.http.get<CakeItemDto[]>(this.baseUrl);
  }
}
