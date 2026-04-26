import { Component } from '@angular/core';
import { HigherManagementService } from '../service/higher-management.service';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from '../service/common-service.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private highermanagement :HigherManagementService,
    private commService:CommonServiceService){    
  }
 
  stats ={
  totalStudent:0,
  totalInActive:0,
  inAcitvePercent:0,
  totalActive:0,
  activePercent:0
}


  ngOnInit(){
  this.highermanagement.dashboard().subscribe({
    next:(res:any)=>
      {
        if(res.status==1)
        {
          this.stats.totalStudent=res.data.totalStudent;
          this.stats.totalActive=res.data.totalActiveStudent;
          this.stats.totalInActive=res.data.totalInActiveStudent;

          this.stats.inAcitvePercent=this.commService.CalculatePercentage(res.data.totalInActiveStudent,res.data.totalStudent)
          this.stats.activePercent=this.commService.CalculatePercentage(res.data.totalActiveStudent,res.data.totalStudent)
        }
        else
        {
          alert("Somethml went")
        }
      },
      error(error:any){
        alert("Some exception occur")
      }
  })
  }
}
