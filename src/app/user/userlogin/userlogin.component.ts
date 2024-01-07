import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
userlogin!:FormGroup

constructor(private api:DfsService, private form:FormBuilder,private route: Router){}

  ngOnInit(): void {
    this.userlogin=this.form.group({
      firstname:[""],
      mobileno:[""]
    })
  }

  userslogin(){
    this.api.userlogin(this.userlogin.value).subscribe((res:any)=>{
      console.log(res);
      
     this.route.navigate(['/userhome'])
    })
  }

}
