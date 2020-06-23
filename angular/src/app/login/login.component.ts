import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {NgForm, Validators ,FormGroup,FormControl, FormBuilder} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  private url='http://localhost:8080/auth';
  username: string;
  password : string;
  status=[];
  ngform: FormGroup;
  erreurMessage: String;
  @Input() message:string;

  constructor(private _httpClient: HttpClient ,private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.ngform = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  
  }
  
  
  
  onSubmit(form: NgForm) {
    let params = new HttpParams().set("username",this.username).set("password",this.password); //Create new HttpParams
    
    
    
    this._httpClient.get(this.url,{params: params}).subscribe((data:any[])=>{
      console.log(data);
      this.status=data;
      console.log(this.status);
      if(this.status){
        console.log("okkk");
        this.router.navigate(["/home"]);
        this.message="bonjour";
        
      }
      

      
    });

    
}
  
  
  
}


