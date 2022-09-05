import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public titleInput: string = 'your event';

  public dateInput: string = 'YYYY-MM-DD';

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;


  constructor() { }

  ngOnInit(): void {
  }


  handleChange() {
    this.days ++;
  }


}
