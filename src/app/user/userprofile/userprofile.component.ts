import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  alldata: any;
  updatedForm:any
  constructor(private api:DfsService ,private edit:FormBuilder){}
  ngOnInit(): void {
    let id = localStorage.getItem('id')
    this.api.userid(id).subscribe((res:any)=>{
      console.log(res,'ddd')
      this.alldata = res
      console.log(this.alldata)
    })
    this.updatedForm=this.edit.group({
      firstname:[""],
      lastname:[""],
      email:[""],
      mobileno:[""],
      address:[""],
      id:[""]
    })

  }
  useredit( b:any){
    this.updatedForm.patchValue({
      firstname:b.firstname,
      mobileno:b.mobileno,
      email:b.email,
      lastname:b.lastname,
      address:b.address,
      id:b._id
    });
    
  }

  updated(){
    this.api.userupdate(this.updatedForm.value).subscribe((res:any)=>{
      console.log(res,'edit')
      window.location.reload()

    })
  }

}
