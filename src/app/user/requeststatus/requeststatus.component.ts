import { Component, OnInit } from '@angular/core';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-requeststatus',
  templateUrl: './requeststatus.component.html',
  styleUrls: ['./requeststatus.component.css']
})
export class RequeststatusComponent implements OnInit {
  userdata: any;
  alldata:any

  constructor(private api: DfsService) { }
  ngOnInit(): void {
  
    this.api.useruploaddata().subscribe((res: any) => {
      console.log(res, "dd");

      
      this.userdata = res
    })
    let id = localStorage.getItem('id')
    this.api.userid(id).subscribe((res:any)=>{
      console.log(res,'ddd')
      this.alldata = res
      console.log(this.alldata)
    })
  }

}
