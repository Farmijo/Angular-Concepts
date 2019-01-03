import { Component, OnInit } from '@angular/core';
declare var EQCSS;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario = "Fran"

  constructor() { }
  
  ngOnInit() {
  }

}
