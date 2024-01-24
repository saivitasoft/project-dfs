import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-userrequest',
  templateUrl: './userrequest.component.html',
  styleUrls: ['./userrequest.component.css']
})
export class UserrequestComponent implements OnInit {
  data: any;
  updatedForm:any;
  alluser:any
  constructor(private api:DfsService ,private edit:FormBuilder){}
  ngOnInit(): void {
   this.api.useruploaddata().subscribe((res:any)=>{
    console.log(res,'res');
    
    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      
      this.api.userid(element.userId).subscribe((res1:any)=>{
        res[index]["users"] = res1
      })
      this.alluser = res;
    }
    
   });
  }
}
   

  //  this.updatedForm=this.edit.group({
  //   firstname:[""],
  //   lastname:[""],
  //   username:[""],
  //     email:[""],
  //     mobileno:[""],
  //     photoprice:[""],
  //     photosize:[""],
  //     totalamount:[""],
  //     noofcopiece:[""],
  //     id:[""]
  //  })


  
      // if(this.api){
      //   alert( 'user dleted succesfully')
      // }
      // else{
      //   alert('user  not dleted')
      // }

  
   

