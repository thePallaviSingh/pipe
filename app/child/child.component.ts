import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  NumberArray: any[] = [];
  constructor() {
    this.NumberArray = [
      { num1: 20, num2: 10 },
      { num1: 50, num2: 40 },
    ];
  }

  ngOnInit() {}
}
