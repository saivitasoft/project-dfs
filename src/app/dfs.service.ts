import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DfsService {

  constructor(private http: HttpClient) { }

  jwttoken(): any {
    const header = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
    }
    return header
  }

  // Admin
  adminLogin(data: any) {

    return this.http.post("http://localhost:6500/admin/login", data);
  }
  photoprice(data: any) {
    return this.http.post("http://localhost:6500/photo/create", data,)
  }

  viewallphoto() {
    return this.http.get('http://localhost:6500/photo/get/allphoto')
  }

  alluserdata() {
    return this.http.get('http://localhost:6500/user/get/users', this.jwttoken())
  }
  userid(id: any) {
    return this.http.get('http://localhost:6500/user/get/user/getById/' + id,)
  }

  deleteprice(id: any) {
    return this.http.delete('http://localhost:6500/photo/deleteById/' + id)
  }

  // User
  useradd(data: any) {
    return this.http.post("http://localhost:6500/user/create", data)
  }


  userlogin(info: any) {
    return this.http.post("http://localhost:6500/user/login", info)
  }

  uploadPhotodetails(data: any) {
    return this.http.post('http://localhost:6500/upload/creates', data)
  }

  useruploaddata() {
    return this.http.get('http://localhost:6500/upload/get/userupload')
  }

  userupdate(data: any) {
    return this.http.put('http://localhost:6500/user/updateById/' + data.id, data)
  }
}





