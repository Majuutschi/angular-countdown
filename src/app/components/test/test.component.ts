import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public innerWidth: any;

  public titleInput: string = 'your event';

  public dateInput: string = 'YYYY-MM-DD';

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event']) 
  onWindowResize() {
    this.innerWidth = window.innerWidth
  }

  handleChange() {
    this.days ++;
  }

  calculateTitleWidth(length: any) {
    console.log(this.innerWidth)
    return (this.innerWidth * 1.7)/(length+8) +'px'
  }

  calculateDateWidth(length: any) {
    return (this.innerWidth * 2.6)/(length+14) +'px'
  }

}
