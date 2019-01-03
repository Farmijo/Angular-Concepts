import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componente = "home"

  disabled = true


  url = "https://google.es"
  constructor() { }

  ngOnInit() {
  }

}
