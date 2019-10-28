import { Component, OnInit, SelfDecorator } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  

  custId:String;
  custName:String;
  constructor(router :ActivatedRoute) { 
    router.params.subscribe(params=>{
      this.custId=params.custId;
      this.custName=params.custName;

    })

  
  }

  today = Date.now();
    fixedTimezone = this.today;

  ngOnInit() {

    
  }

  










}
