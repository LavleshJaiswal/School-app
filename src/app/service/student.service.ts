import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private service:ApiService) 
  { }

  registerStudent(data:any)
  {
   return this.service.Post(data,"student/savedata")
  }
}

