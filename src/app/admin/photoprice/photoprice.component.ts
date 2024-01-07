import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-photoprice',
  templateUrl: './photoprice.component.html',
  styleUrls: ['./photoprice.component.css']
})
export class PhotopriceComponent implements OnInit{

  photodetails!:FormGroup
 
  constructor(private api:DfsService,private form:FormBuilder, private home:Router){}

  ngOnInit(): void {
   this.photodetails=this.form.group({
    photosize:[""],
    photoprice:[""]
   })
  }


  photoupload() {
    this.api.photoprice(this.photodetails.value).subscribe((res: any) => {
      console.log(res)
      if (res) {
        alert('photo size add');
        this.home.navigate(['/adminhome/viewphoto'])
      }
      else {
        alert('photo size not add')

      }

    });
    

  }

}
