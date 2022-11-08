import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = `${environment.urlApi}`;
    // this.urlApi = environment.urlApi + '/orders';
    // init flux de données
    this.collection$ = this.httpClient.get<Order[]>(`${this.urlApi}/orders`);
    console.log(this.collection$);
  }
}
