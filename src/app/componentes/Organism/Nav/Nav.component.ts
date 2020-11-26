import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
  h_btn:boolean;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("logged")==="false"){
      this.h_btn=false;
    }else this.h_btn=true;
  }

}
