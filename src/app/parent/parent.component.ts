import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  messageToChild = '';
  messageFromChild = '';
  listenToChild(msg: string) {
    this.messageFromChild = msg;
  }
}
