import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserShoppingCartService} from 'src/app/services/user-shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart:UserShoppingCartService,public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }

}
