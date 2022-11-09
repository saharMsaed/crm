import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-delete-order',
  templateUrl: './page-delete-order.component.html',
  styleUrls: ['./page-delete-order.component.css']
})
export class PageDeleteOrderComponent implements OnInit {

  public id!: number;
  constructor(private orderService: OrdersService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
      })

   }

  ngOnInit(): void {
    this.orderService.delete(this.id).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
