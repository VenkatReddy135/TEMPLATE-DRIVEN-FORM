import { Component } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public errorMsg='';
  public employees:any=[];
  title = 'demo';
  public topics=["angular","javascript","html"];

  userModel=new User('venkat','',null,'default',true);

public hasError=true;
constructor(private service:ApiService){
this.getData();
}

  validateTopic(value){
    if(value=="default"){
      this.hasError=true;
    }else{
      this.hasError=false;
    }

  }

  getData(){
    this.service.get().subscribe(data=>{
      this.employees=data
    })
  }


  enroll(){
     this.service.postData(this.userModel).subscribe(data=>{
       this.getData();
       console.log(data)
     },error=>{
       this.errorMsg=error.statusText;
     })
  }
}
