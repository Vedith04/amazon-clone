import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private toast: HotToastService) { }

  ngOnInit(): void {
  }
  
  loginForm=new FormGroup({
    'username': new FormControl('',[Validators.required,Validators.email]),
    'password': new FormControl('',[Validators.required])
  })

  loginUser(){
    if(this.loginForm.invalid){
      return;
    }
    const {email,password}=this.loginForm.value;
    this.authService.login(email,password).pipe(
      this.toast.observe({
        success: 'Logged in successfully',
        loading: 'Logging in....',
        error:'There was an error'
      })
    ).subscribe(()=>{
      this.router.navigate(['/home']);
    });
 
  }

  get user(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
}
