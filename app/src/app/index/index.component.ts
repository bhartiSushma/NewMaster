import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  public formgroups:FormGroup;
    constructor(private fB:FormBuilder){
     }
  
    ngOnInit() {
      this.createForm();
    }
      createForm(){
      this.formgroups=this.fB.group({
        FirstName:['sushma',Validators.required],
        LastName:['Bharti',Validators.required],
        email:['abc@gmail.com',[Validators.email,Validators.required]],
        
      })
    }

onsubmit(){
  this.Getdata();
}
Getdata(){
  debugger;
  
  //this.editService.save(product);

 // var sb = this.editService.read();
 //console.log('rgdffdgfs',snv);
  // this.ind.savedate(dt).subscribe(data=>{
  //   console.log(data);
  
}
}