import { Component, OnInit } from '@angular/core';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-userphoto',
  templateUrl: './userphoto.component.html',
  styleUrls: ['./userphoto.component.css']
})
export class UserphotoComponent implements OnInit {
 photoall:any
  constructor(private api:DfsService){}
  ngOnInit(): void {
    this.api.viewallphoto().subscribe((res:any)=>{
      console.log(res)
      this.photoall=res
    })
  }

}
