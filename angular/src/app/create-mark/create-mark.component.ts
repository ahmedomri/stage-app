import { MarkService } from '../mark.service';
import { Mark } from '../mark';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-mark',
  templateUrl: './create-mark.component.html',
  styleUrls: ['./create-mark.component.css']
})
export class CreateMarkComponent implements OnInit {


mark: Mark = new Mark();
  submitted = false;

  constructor(private markService: MarkService,
    private router: Router) { }

  ngOnInit() {
  }

   newMark(): void {
    this.submitted = false;
    this.mark = new Mark();
  }

  save() {
    this.markService.createMark(this.mark)
      .subscribe(data => console.log(data), error => console.log(error));
    this.mark = new Mark();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
        
  }

  gotoList() {
    this.router.navigate(['/marks']);
  }

}
