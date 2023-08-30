import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Variables
  heading = 'Welcome to Angular.';
  imagePath = 'assets/images/FMA.jpg';

  // Function
  triggerAlert(e: Event) {
    let userInput = (e.target as HTMLInputElement).value.trim();
    if (userInput !== '') {
      alert('You typed: ' + userInput);
      (e.target as HTMLInputElement).value = '';
    }
  }

  defaultValue = 'Two-Way Binding...';

  pinCode = '';
  submitMessage(e: HTMLInputElement) {
    this.pinCode = e.value;
  }
}
