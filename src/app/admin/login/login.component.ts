import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  AdminLogin!: FormGroup;

  constructor(private api: DfsService, private form: FormBuilder, private home: Router) { }

  ngOnInit(): void {
    this.AdminLogin = this.form.group({
      username: [""],
      password: [""]
    })
  }
  adminlogin() {
    this.api.adminLogin(this.AdminLogin.value).subscribe((res: any) => {
      console.log(res);
    localStorage.setItem('token',res.token)

      if (res) {
        alert('user login successfully');
        this.home.navigate(['/adminhome'])

      }
      else {
        alert('user login failed')

      }


    });
    

  }
}
