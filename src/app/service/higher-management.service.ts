import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({
  providedIn: 'root'
})
export class HigherManagementService {

  constructor(private apiService:ApiService) { }

  dashboard(){
    return this.apiService.get("","student/dashboard")
    }
}
