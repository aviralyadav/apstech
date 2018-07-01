import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.jpg' },
      { name: 'assets/images/thumb2.jpg' },
      { name: 'assets/images/thumb3.jpg' },
      { name: 'assets/images/thumb4.jpg' },
      { name: 'assets/images/thumb5.jpg' },
      { name: 'assets/images/thumb6.jpg' },
      { name: 'assets/images/thumb1.jpg' },
      { name: 'assets/images/thumb2.jpg' },
      { name: 'assets/images/thumb3.jpg' },
      { name: 'assets/images/thumb4.jpg' },
      { name: 'assets/images/thumb5.jpg' },
      { name: 'assets/images/thumb6.jpg' },
    ]
  }

  ngOnInit() {
  }

}
