import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() public label!: string;
  @Input() public btnStyle: string;
  @Input() public route!: string;
  constructor() {
    this.btnStyle = "btn btn-primary";
  }

  ngOnInit(): void {
  }

}
