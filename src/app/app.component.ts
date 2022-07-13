import { Component } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon-clone';
  productsData: any;
  constructor(private dataApi:ApiService){
    this.dataApi.data().subscribe((value)=>{
      this.productsData=value;
    })
  }

}
