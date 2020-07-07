import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Mark } from '../mark';
import { MarkService } from '../mark.service';
import { CarService } from '../car.service';
import { Observable } from "rxjs";



@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
 car :Car=new Car();
 markId :number;
 
 marks : Observable<Mark[]>;
 submitted = false;
  constructor(private markService: MarkService,
  private carService: CarService) { }

  ngOnInit() {
  this.marks=this.markService.getMarksList();
   this.submitted = false;
    this.car = new Car();

  }


   save() {
    this.carService.createCar(this.car,this.markId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.gotoList();
  }

  onSubmit() {

    this.submitted = true;
    this.save();
        
  }

  gotoList() {
    
  }
  selectOption(id: number) {
    //getted from event
    console.log(id);
    //getted from binding
    this.markId=id;
  
  }

}
