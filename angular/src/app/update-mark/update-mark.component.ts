import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkService } from '../mark.service';
import { Mark } from '../mark';

@Component({
  selector: 'app-update-mark',
  templateUrl: './update-mark.component.html',
  styleUrls: ['./update-mark.component.css']
})
export class UpdateMarkComponent implements OnInit {

id: number;
mark: Mark;

  constructor(private route: ActivatedRoute,private router: Router,
  private markService: MarkService) { }

  ngOnInit() {

  this.mark = new Mark();

    this.id = this.route.snapshot.params['id'];
    
    this.markService.getMark(this.id)
      .subscribe(data => {
        console.log(data)
        this.mark = data;
      }, error => console.log(error));
  }


  updateMark() {
    this.markService.updateMark(this.id, this.mark)
      .subscribe(data => console.log(data), error => console.log(error));
    this.mark = new Mark();
    this.gotoList();
  }

  onSubmit() {
    this.updateMark();    
  }

  gotoList() {
    this.router.navigate(['/marks']);
  }

}
