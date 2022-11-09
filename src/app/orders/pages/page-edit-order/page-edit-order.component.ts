import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.css']
})
export class PageEditOrderComponent implements OnInit {
  public id!: number;
  // public order!: Order;
  //or
  public order$: Observable<Order>;
  constructor(private orderService: OrdersService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
      })
    // or sans subscribe
    // this.id = this.route.snapshot.params['id'];
    //console.log(this.orderService.getById(this.id).subscribe());

    // this.orderService.getById(this.id).subscribe((data) => {
    //   this.order = data
    // });

    this.order$ = this.orderService.getById(this.id);

  }

  ngOnInit(): void {

  }

  public action(item: Order){
    this.orderService.put(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
