import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  constructor(private apiservice :ApiService) {
   }
   adminLogin(data:any){
    return this.apiservice.Post(data,"student/adminlogin")
   }

   getStudentList(data?:any){
    return this.apiservice.get(data,"student/studentlist")

   }
}
