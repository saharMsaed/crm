import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { BtnComponent } from './component/btn/btn.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TotalPipe,
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    TotalPipe,
    BtnComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
