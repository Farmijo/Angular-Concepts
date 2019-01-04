import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterruptorComponent } from './interruptor/interruptor.component';

@NgModule({
  declarations: [InterruptorComponent],
  imports: [
    CommonModule
  ],
  exports:[InterruptorComponent]
})
export class UtilsModule { }
