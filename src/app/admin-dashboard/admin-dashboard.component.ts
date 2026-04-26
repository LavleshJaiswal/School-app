import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
constructor(private router: Router){}
  
logout() {
  localStorage.removeItem('token');   // remove token

  this.router.navigate(['/login']);   // redirect to login
}
}
