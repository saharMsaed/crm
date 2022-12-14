import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  @Output() public submitted: EventEmitter<Order>;
  public states: string[];
  public form!: FormGroup; // lifecycle hook 14 construct, ngOnchanges ngOnInit

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Order>(); // flux de données, event d'envoie de données
    this.states = Object.values(StateOrder);

   }

  //  ngOnChanges(): void { les input sont recuperable dans ngOnChanges, ngOnInit, ...
  //   console.log(this.init);
  // }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        typePresta: [this.init.typePresta, Validators.required],
       // client: [this.init.client, Validators.compose([Validators.required, Validators.minLength(2)])], // on peut ne pas utiliser compose
        client: [this.init.client, [Validators.required, Validators.minLength(2)]],
        nbJours: [this.init.nbJours],
        tjmHt: [this.init.tjmHt],
        tva: [this.init.tva],
        state: [this.init.state],
        comment: [this.init.comment],
        id: [this.init.id],
      }
    )
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }
}
