import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name = 'test';
  @Input() showTest = true;

  @Output() myOutput = new  EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  fireEvent() {
    console.log('firevent')
    this.myOutput.emit('bonjour papa !');
  }
}
