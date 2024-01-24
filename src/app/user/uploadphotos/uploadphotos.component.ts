import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DfsService } from 'src/app/dfs.service';

@Component({
  selector: 'app-uploadphotos',
  templateUrl: './uploadphotos.component.html',
  styleUrls: ['./uploadphotos.component.css']
})
export class UploadphotosComponent implements OnInit {
  photos: any;
  seletedSize: any;
  price: any;
  pprice:any
  uploaddata!: FormGroup
  constructor(private api: DfsService, private data: FormBuilder, private request: Router) { }
  ngOnInit(): void {
    this.api.viewallphoto().subscribe((res: any) => {
      this.photos = res;
      console.log(res,)
      

    })
    
    

    this.uploaddata = this.data.group({
      userId: localStorage.getItem("id"),
      photosize: [""],
      photoprice: [""],
      noofcopiece: [""],
      totalamount: [""],
      // image: [""],

    })

  }

  upload() {
    
    console.log(this.uploaddata.value);
    
    this.api.uploadPhotodetails(this.uploaddata.value).subscribe((res: any) => {
      console.log(res,"post")
      this.request.navigate(["/userhome/request"])

    })
  }

  selected(p: any) {
     this.pprice = this.photos.find((f: any) => f.photosize == p.target.value);

    this.uploaddata.patchValue({
      photoprice: Number(this.pprice.photoprice )
      
    })
  }
  calculate(v: any) {

    let a = v.target.value;
    let total = a * this.pprice.photoprice;
    
    
    const tp = total
    console.log(total, tp);

    console.log(a);
    this.uploaddata.patchValue({
      totalamount:tp



    })


  }
  // selectedphoto(event:any){
  //   if(event.target.files && event.target.files[0]){
  //     var profile = new FileReader();
  //     profile.readAsDataURL(event.target.files[0])
  //     profile.onload = (event) =>{
  //       this.selectedphoto = event.target?.result;
  //     }
  //   }
  // }



}
