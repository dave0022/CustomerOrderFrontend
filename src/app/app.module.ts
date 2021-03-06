import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerService } from './customers/shared/customer.service';
import {HttpClientModule} from '@angular/common/http';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { OrderComponent } from './order/order.component';

const appRoutes: Routes = [
  { path: 'customer/:id',
    component: CustomerDetailComponent },
  { path: 'customers/create',
    component: CustomerCreateComponent },
  {
    path: 'customers',
    component: CustomerListComponent,
    data: { title: 'Customer List' }
  },
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
