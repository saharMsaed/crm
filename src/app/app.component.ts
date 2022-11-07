import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string ;
  public close: boolean ;
  public buttonLabel: string ;
  constructor() {
    this.title = 'crm';
    this.close = false;
    this.buttonLabel = 'close';
  }

  public toggle(): void {
    this.close = !this.close;
    this.close ? this.buttonLabel = 'open' : this.buttonLabel = 'close';
  }



}
