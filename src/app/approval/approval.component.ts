import { Component } from '@angular/core';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css'],
})
export class ApprovalComponent {
  isAllowed: boolean | null = null;
  checkAge(status: boolean) {
    this.isAllowed = status;
  }
}
