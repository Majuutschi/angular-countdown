import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public innerWidth: any;

  public titleInput: string = 'your event';

  public dateInput: any = new Date().toISOString().substring(0, 10);

  public currentDate: any = new Date().toISOString().substring(0, 10);

  public days: number = 0;
  public hours: any = 0;
  public minutes: any = 0;
  public seconds: any = 0;

  
  currentInMilliseconds: any;
  selectedDate: any;
  selectedInMilliseconds: any;
  difference: any;


  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth
    console.log(this.currentDate)
    console.log(this.dateInput)
  }

  @HostListener('window:resize', ['$event']) 
  onWindowResize() {
    this.innerWidth = window.innerWidth
  }

  calculateTitleWidth(length: any) {
    return (this.innerWidth * 1.7)/(length + 8) +'px'
  }

  calculateDateWidth(length: any) {
    if(this.dateInput.length <= 6) {
      return (this.innerWidth * 2.5)/(length + 24) +'px'
    } else {
      if(this.days >= 1000) {
        return (this.innerWidth * 1.9)/(length + 14) +'px'
      } else if(this.days >= 100) {
        return (this.innerWidth * 2)/(length + 14) +'px'
      } else if (this.days >= 10) {
        return (this.innerWidth * 2.1)/(length + 14) +'px'
      } else if (this.days <= 10) {
        return (this.innerWidth * 2.2)/(length + 14) +'px'
      } else {
        return (this.innerWidth * 2.4)/(length + 14) +'px'
      }
      
    }
  }

  startCountdown() {
    console.log('start')
    if(this.dateInput.length > 9) {
      console.log(this.dateInput)
      console.log(this.currentDate)
      
      if (this.dateInput > this.currentDate) {
        if(this.dateInput == 'åååå-mm-dd') {
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
        } else {
          setInterval(() => {
            this.currentDate = new Date();
            this.selectedDate = new Date(this.dateInput);
            this.currentInMilliseconds = this.currentDate.getTime();
            this.selectedInMilliseconds = this.selectedDate.getTime();
            this.difference = this.selectedInMilliseconds - this.currentInMilliseconds;
            
            this.seconds = Math.floor(this.difference / 1000);
            this.minutes = Math.floor(this.seconds / 60);
            this.hours = Math.floor(this.minutes / 60);
            this.days = Math.floor(this.hours / 24);
        
            this.hours %= 24;
            this.minutes %= 60;
            this.seconds %= 60;
            this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
            this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
            this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
          }, 1000)
        }
      }
    } else {
      
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }



  
}
