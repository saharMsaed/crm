import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.css']
})
export class PageAddOrderComponent implements OnInit {

  public order: Order;

  constructor(private orderService: OrdersService) {
    this.order = new Order;
  }

  ngOnInit(): void {
  }

  //inject service pour faire post
  public action(item: Order){
    this.orderService.add(item).subscribe();
  }
}
