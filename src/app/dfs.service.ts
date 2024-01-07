import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DfsService {

  constructor( private http:HttpClient) { }

  adminlogin(data:any){

    return this.http.post("http://localhost:6500/admin/login",data);

  }
  useradd(data:any){
    return this.http.post("http://localhost:6500/user/create",data)
  }

  userlogin(info:any){
    return this.http.post("http://localhost:6500/user/login",info)
  }

  photoprice(data:any){
    return this.http.post("http://localhost:6500/photo/create",data)
  }
  alluserdata(){
    return this.http.get('http://localhost:6500/user/get/users')
  }

  viewallphoto(){
    return this.http.get('http://localhost:6500/photo/get/allphoto')
  }

  uploaddetails(data:any){
    return this.http.post('http://localhost:6500/upload/create',data)
  }
}




