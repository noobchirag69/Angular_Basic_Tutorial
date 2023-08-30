import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input()
  messageFromParent = '';
  @Output()
  sendMessageEmitter = new EventEmitter();
  talkToParent(e: Event) {
    this.sendMessageEmitter.emit((e.target as HTMLInputElement).value);
  }
}
