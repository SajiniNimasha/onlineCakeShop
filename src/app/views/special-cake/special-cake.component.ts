import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-special-cake',
  templateUrl: './special-cake.component.html',
  styleUrls: ['./special-cake.component.scss']
})
export class SpecialCakeComponent implements OnInit {

  custId:String;
  custName:String;
  constructor(router :ActivatedRoute) { 
    router.params.subscribe(params=>{
      this.custId=params.custId;
      this.custName=params.custName;

    })

  
  }

  ngOnInit() {
  }

}
