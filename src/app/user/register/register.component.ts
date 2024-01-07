import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm!:FormGroup;
  constructor(private api:DfsService,private formBuilder:FormBuilder, private login:Router){}

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      firstname:[""],
      lastname:[""],
      email:[""],
      mobileno:[""],
      address:[""]
    })
  }


    useradd(){
      console.log(this.RegisterForm.value, "posted user successfully")

      this.api.useradd(this.RegisterForm.value).subscribe((res:any)=>{
        console.log(res)
           this.login.navigate(['/userlogin'])

           if(res){
            alert('user add successfully')
          }
          else{
            alert('user add failed')
          }
      })
      
    }




}
