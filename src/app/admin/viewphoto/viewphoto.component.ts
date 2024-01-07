import { Component, OnInit } from '@angular/core';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-viewphoto',
  templateUrl: './viewphoto.component.html',
  styleUrls: ['./viewphoto.component.css']
})
export class ViewphotoComponent implements OnInit {

  photoall:any

  constructor(private api:DfsService){}
  ngOnInit(): void {
  this.api.viewallphoto().subscribe((res:any)=>{
    console.log(res)
    this.photoall=res
  })
  }

}
