import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    function printcoord(pt:{x:number;y:number}){
      console.log("the coordinate x value is"+pt.x)

      printcoord({x:3, y:7})
    }
  }

  ngOnInit(): void {
  }

}
