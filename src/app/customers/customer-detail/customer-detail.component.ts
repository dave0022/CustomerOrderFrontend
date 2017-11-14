import {Component, OnInit} from '@angular/core';
import {Customer} from '../shared/customer.model';
import {CustomerService} from '../shared/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Order} from '../../order/order';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  confirmDelete = false;
  orders: Order[];
  order: Order;
  customer: Customer;
  constructor(private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.customerService.getById(+params.get('id')))
      .subscribe(customer => this.customer = customer);
    this.customerService.getOrder()
        .subscribe(
          orders => {
            this.orders = orders;
          }
        );
  }
  product() {
    console.log('Hey');
  }
  delete() {
    this.confirmDelete = true;
  }
  abortDelete() {
    this.confirmDelete = false;
  }
  deleteConfirmed() {
    this.customerService.delete(this.customer.id)
      .subscribe(customer => this.router
        .navigateByUrl('/customers'));
  }

}
