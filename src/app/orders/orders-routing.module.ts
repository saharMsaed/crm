import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/pages/page-not-found/page-not-found.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageDeleteOrderComponent } from './pages/page-delete-order/page-delete-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: 'orders', component: PageListOrdersComponent  },
  { path: 'orders/add', component: PageAddOrderComponent  },
  { path: 'orders/edit/:id', component: PageEditOrderComponent  },
  { path: 'orders/delete/:id', component: PageDeleteOrderComponent  },
  // { path: 'test', redirectTo: 'ordersddd', pathMatch: 'full' },
  { path: 'test', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
