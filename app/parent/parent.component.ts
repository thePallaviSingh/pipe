import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  NumberArray: any[] = [];
  constructor(private router: Router) {
    this.NumberArray = [
      { num1: 50, num2: 20 },
      { num1: 10, num2: 5 },
    ];
  }

  ngOnInit() {}
  // _nextpage() {
  //   console.log('hlw');
  //   this.router.navigate(['/child']);
  // }
}
