import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componente = "home"

  disabled = true
  clicks = 0;


  url = "https://google.es"
  constructor() { }

  ngOnInit() {
  }

  interpolation(){
    this.disabled = !(this.disabled);
  }

  add(){
    (this.clicks)++;
  }

}
