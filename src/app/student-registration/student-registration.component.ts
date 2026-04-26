import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './student-registration.component.html',
   styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private studentService:StudentService) {

    this.registerForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      gender: ['',Validators.required],
      course: ['',Validators.required],
      agree: [false,Validators.requiredTrue]
    });
  }

  onSubmit() 
  {
    if(this.registerForm.invalid)
    {
      this.registerForm.markAllAsTouched()
      alert("All fieldsare mandetory")
      return
    }
    this.studentService.registerStudent(this.registerForm.value)
    .subscribe({
    next:(res:any)=>{
       if(res.status==true)
       {
          alert(res.message)
       }
       else{
        alert(res.message)
       }
    },
    error:(err:any)=>
      {
        console.log("Error",);
        alert(err.error.messag!=undefined?err.error.messag:"something went wrong")
    }
  });
 
  }
}
