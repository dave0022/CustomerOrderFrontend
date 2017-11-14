import { Injectable } from '@angular/core';
import {Customer} from './customer.model';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Order} from '../../order/order';

const url = environment.apiEndpoint + '/customer';
const url2 = environment.apiEndpoint + '/order';
@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  get(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(url);
  }
  getOrder(): Observable<Order[]> {
    return this.http
      .get<Order[]>(url2);
  }
  getById(id: number): Observable<Customer> {
    return this.http
      .get<Customer>
      (url + '/' + id);
  }
  delete(id: number): Observable<Customer> {
    return this.http
      .delete<Customer>(url + '/' + id);
  }
  create(customer: Customer): Observable<Customer> {
    return this.http
      .post<Customer>(url, customer);
  }

}
