import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageTestComponent } from './pages/page-test/page-test.component';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './component/form-order/form-order.component';
import { PageDeleteOrderComponent } from './pages/page-delete-order/page-delete-order.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    PageTestComponent,
    FormOrderComponent,
    PageDeleteOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
