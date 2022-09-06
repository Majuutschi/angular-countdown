import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public innerWidth: any;

  public titleInput: string = 'your event';

  public dateInput: string = '2022-09-06';

  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  currentDate: any;
  currentInMilliseconds: any;
  selectedDate: any;
  selectedInMilliseconds: any;
  difference: any;


  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event']) 
  onWindowResize() {
    this.innerWidth = window.innerWidth
  }

  calculateTitleWidth(length: any) {
    console.log(this.innerWidth)
    return (this.innerWidth * 1.7)/(length+8) +'px'
  }

  calculateDateWidth(length: any) {
    if(this.dateInput.length <= 6) {
      return (this.innerWidth * 2.6)/(length+22) +'px'
    } else {
      return (this.innerWidth * 2.6)/(length+14) +'px'
    }
  }


  myCountdown() {
    this.currentDate = new Date();
    this.selectedDate = new Date(this.dateInput);
    this.currentInMilliseconds = this.currentDate.getTime();
    this.selectedInMilliseconds = this.selectedDate.getTime();
    this.difference = this.selectedInMilliseconds - this.currentInMilliseconds;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);
  }
  
  handleDate() {
    if (this.dateInput.length <= 6) {
      console.log("hello")
    }
    else {
      console.log("bye")
    }
    
  }
  

}
