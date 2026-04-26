import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})

export class AdminLoginComponent {
loginForm:FormGroup;

constructor(
  private fb: FormBuilder, 
  private adminservices:AdminLoginService,
   private router:Router
){
  this.loginForm=this.fb.group({
  userName:['',Validators.required],
  password:['',Validators.required]
  })
  
}

OnSubmit(){
  
  if(this.loginForm.invalid)
  {
    alert("Fill mandotaory field");
  }
  else{
    console.log(this.loginForm)
   this.adminservices.adminLogin(this.loginForm.value)
  .subscribe({
    next:(res:any)=>{
      if(res.status===200)
      {
        alert(res.message)
        localStorage.setItem("token",res.token)
        // this.router.navigate(['/admindashboard']);
        this.router.navigate(['/home']);
      }
    },
    error(error:any){
      if(error!=undefined && error.status===404)
      {
        alert("api not found")
      }
      else
      {
        alert(error.error.message)
      }
    }
   })
   
  }
}
}
