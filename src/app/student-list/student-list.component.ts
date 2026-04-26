import { Component } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-student-list',
  imports: [CommonModule,RouterModule],
  standalone:true,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
constructor(private adminservices:AdminLoginService){

}
studentList: any[] = [];

ngOnInit(){
this.BindStudent();
}

BindStudent(){
 this.adminservices.getStudentList().subscribe({
next:(res:any)=>{
this.studentList=res;
},
error:(error:any)=>
{
alert("Error");
}

 })
}
}
