import { Component, OnInit } from '@angular/core';
import { CakeItemService } from 'src/app/service/cake-item.service';
import { CakeItemDto } from 'src/app/dto/CakeItemDto';
import { CakeOrderService } from 'src/app/service/cake-order.service';
import { CakeOrderDto } from 'src/app/dto/CakeOrderDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {

  cakeItems:CakeItemDto[]=[];
  cakeOrder:CakeOrderDto[]=[];
  total: number  = 0; 
  


  subTot:String;
  constructor(private cakeItemService:CakeItemService, private cakeOrderService:CakeOrderService,router :ActivatedRoute) {
    router.params.subscribe(params=>{
      this.subTot=params.subTot;
    })
   }

  ngOnInit() {
    var i =0;
    var j=0;
   
  

 
    this.cakeItemService.getAllCakeItem().subscribe(cakeItems => {
      this.cakeItems = cakeItems;

 for(i;i<cakeItems.length;i++){
   console.log(cakeItems[i].itemPrice);
 this.total=this.total+cakeItems[i].itemPrice;
 console.log(this.total);
 }
 
// ///////////////////////

    }, error1 => {
      console.log(error1);
    });

    this.cakeOrderService.getAllCakeOrder().subscribe(cakeOrder =>{
      this.cakeOrder=cakeOrder;
     
    });

  }


}
