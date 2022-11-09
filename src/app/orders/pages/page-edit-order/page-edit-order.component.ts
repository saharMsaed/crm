import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.css']
})
export class PageEditOrderComponent implements OnInit {
  public id!: number;
  public order$!: Order;
  constructor(private orderService: OrdersService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
      })

    //console.log(this.orderService.getById(this.id).subscribe());
  }

  ngOnChange(): void {

  }

  ngOnInit(): void {
    this.orderService.getById(this.id).subscribe((data) => {
      this.order$ = data
    });
  }

  public action(item: Order){
    this.orderService.put(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
