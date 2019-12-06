import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {

  classApplied = false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  constructor() { }

  ngOnInit() {
  }

}
