import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-uploadphotos',
  templateUrl: './uploadphotos.component.html',
  styleUrls: ['./uploadphotos.component.css']
})
export class UploadphotosComponent implements OnInit{

  uploaddata!:FormGroup
  constructor( private api:DfsService,private data:FormBuilder, private user:Router){}
  ngOnInit(): void {
    this.uploaddata = this.data.group({
      photosize:[""],
      photoprice:[""],
      noofcopiece:[""],
      totalamount:[""],
      image:[""],
      status:['pending']
    })
  }

  upload(){
    this.api.uploaddetails(this.uploaddata.value).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
