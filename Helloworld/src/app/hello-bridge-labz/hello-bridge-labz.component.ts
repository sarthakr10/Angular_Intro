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
}