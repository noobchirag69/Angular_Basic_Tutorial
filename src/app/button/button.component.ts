import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  isStyleApplied: boolean = false;
  toggleColor() {
    // Toggling the boolean value of isStyleApplied
    this.isStyleApplied = !this.isStyleApplied;
  }
}
