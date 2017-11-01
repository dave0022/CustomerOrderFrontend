import { Component, OnInit } from '@angular/core';
import {Customer} from '../shared/customer.model';
import {CustomerService} from '../shared/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  customerToDelete: Customer;
  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.customerService.get()
      .subscribe(
        customers => {
          this.customers = customers;
        }
      );
  }

  details(customer: Customer) {
    this.router
      .navigateByUrl('/customer/' + customer.id);
  }
  delete(customer: Customer, $event) {
    console.log('delete Clicked');
    this.customerToDelete = customer;
    $event.stopPropagation();
  }
  createCustomer() {
    this.router
      .navigateByUrl('/customers/create');
  }
  deleteAborted($event) {
    this.customerToDelete = null;
    $event.stopPropagation();
  }
  deleteConfirmed($event) {
    this.customerService.delete(this.customerToDelete.id)
      .switchMap(customer =>  this.customerService.get())
      .subscribe(customer => {
        });
    $event.stopPropagation();
  }
  /*delete(customer: Customer, $event) {
    this.customerToDelete = customer;
      $event.stopPropagation();
  }*/
}
