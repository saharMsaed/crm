import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.css'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public headers!: string[];

  constructor(private ordersService: OrdersService) {
    this.headers = ['Type', 'Client', 'Durée', 'Tjm HT', 'Total HT', 'Total TTC', 'Statut']
    // souscrire pour récupérer dans le callback les données
    this.ordersService.collection$.subscribe((data) => {
      this.collection = data;
   })
   //console.log(this.collection)
  }

  ngOnInit(): void {
  }

}
