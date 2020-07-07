import { Observable } from "rxjs";
import { MarkService } from '../mark.service';
import { Mark } from '../mark';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-list',
  templateUrl: './mark-list.component.html',
  styleUrls: ['./mark-list.component.css']
})
export class MarkListComponent implements OnInit {

 marks : Observable<Mark[]>;


  constructor(private markService: MarkService,
    private router: Router) {

    	
     }

  ngOnInit() {
  this.reloadData();
  }

  reloadData() {
   this.marks=this.markService.getMarksList();



      }


  deleteMark(id: number) {
    this.markService.deleteMark(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  MarkDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateMark(id: number){
    this.router.navigate(['updateMark',id]);
  }

}
