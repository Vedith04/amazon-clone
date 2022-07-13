import { Component, OnInit } from '@angular/core';
import { ProductCardsComponent } from 'src/app/components/product-cards/product-cards.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataFromApi:any;
  constructor(private dataApi:ApiService) {
    this.dataApi.data().subscribe((value)=>{
      this.dataFromApi=value;
    })
  }

  ngOnInit(): void {
  
  }

  

}
