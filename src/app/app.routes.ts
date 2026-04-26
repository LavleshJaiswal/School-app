import { Routes } from '@angular/router';
import { SchooldashboardAppComponent } from './schooldashboard-app/schooldashboard-app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { authGuard } from './gaurd/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: SchooldashboardAppComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent },
      { path: 'register', component: StudentRegistrationComponent }
    ]
  },
  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    children: 
    [
      { path: 'admindashboard', component: AdminDashboardComponent },
         {path:'studentlist',component:StudentListComponent},
         {path:'home',component:HomeComponent},
         {path:'register',component:StudentRegistrationComponent},
         {path:'edit',component:StudentEditComponent}

    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];