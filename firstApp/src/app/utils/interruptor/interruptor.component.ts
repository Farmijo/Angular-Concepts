import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interruptor',
  templateUrl: './interruptor.component.html',
  styleUrls: ['./interruptor.component.css']
})
export class InterruptorComponent implements OnInit {

  activo = true;

  constructor() { }

  ngOnInit() {
  }

  intercambio(){
    this.activo=!this.activo;
  }
}
