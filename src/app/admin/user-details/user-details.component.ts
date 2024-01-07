import { Component, OnInit } from '@angular/core';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  alluser:any
  constructor(private all:DfsService){}

  ngOnInit(): void {
     this.all.alluserdata().subscribe((res:any)=>{
      console.log(res,'sss')
       this.alluser = res
     })
  }

}
