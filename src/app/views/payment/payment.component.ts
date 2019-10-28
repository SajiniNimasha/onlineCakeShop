import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  total:String;
  constructor(router :ActivatedRoute) { 
    router.params.subscribe(params=>{
      this.total=params.total;
    })
  }

  ngOnInit() {
  }


  state8=true;;
state9=false;


stateChanger9(){
  this.state8=!this.state8;
  this.state9=false;
}

stateChanger10(){
  this.state9=!this.state9;
  this.state8=false;
}
  
}
