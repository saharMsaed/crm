import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string ;
  public close: boolean ;
  public buttonLabel: string ;
  private obs: Observable<any>;
  private sub: Subscription;

  constructor() {
    this.title = 'crm';
    this.close = false;
    this.buttonLabel = 'close';
    this.obs =  new Observable<any>((listX) => {
      listX.next(Math.random()); //init des données au flux
    })
    this.sub = this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
  }

  public toggle(): void {
    this.close = !this.close;
    this.close ? this.buttonLabel = 'open' : this.buttonLabel = 'close';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
