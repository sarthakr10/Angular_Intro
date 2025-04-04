import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-bridge-labz',
  templateUrl: './hello-bridge-labz.component.html',
  styleUrls: ['./hello-bridge-labz.component.scss']
})
export class HelloBridgeLabzComponent {
  message: string = "Hello from BridgeLabz";
  logoPath: string = 'assets/BridgeLabz.jpg';
  bridgeLabzUrl: string = 'https://www.bridgelabz.com'; // ✅ Define the URL

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank'); // ✅ Open in a new tab
  }
  userName: string = ''; // ✅ Initialize empty string
  isValid: boolean = true; // ✅ Initialize to true

  validateUserName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // ✅ Starts with uppercase, min 3 letters
    this.isValid = namePattern.test(this.userName);
  }
}