import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent implements OnInit {

  public states: string[];
  constructor() {
    this.states = Object.values(StateOrder);
   }

  ngOnInit(): void {
  }

}
