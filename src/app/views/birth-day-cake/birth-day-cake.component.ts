import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birth-day-cake',
  templateUrl: './birth-day-cake.component.html',
  styleUrls: ['./birth-day-cake.component.scss']
})
export class BirthDayCakeComponent implements OnInit {

 
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
