import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;

  constructor(private httpClient: HttpClient) {
    // init flux de données
    this.collection$ = this.httpClient.get<Order[]>(
      '/orders'
    );
    console.log(this.collection$);
  }
}
