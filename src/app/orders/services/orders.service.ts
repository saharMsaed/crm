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
  }

  public add(item: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, item);

  }

  public getById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.urlApi}/orders/`+id);
  }

  public put(item: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/orders/`+item.id, item);
  }

  public delete(id: Number): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.urlApi}/orders/`+id);
  }
}
