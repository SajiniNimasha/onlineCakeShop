import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  state=true;
  state1=false;
  state2=false;

  stateChanger(){
    this.state= ! this.state;
    this.state1=false;
    this.state2=false;
  }

  stateChanger1(){
   this.state=false;
   this.state2=false;
    this.state1=!this.state1;
  }

  stateChanger2(){
    this.state=false;
    this.state1=false;
    this.state2=!this.state2;
  
  }

}
