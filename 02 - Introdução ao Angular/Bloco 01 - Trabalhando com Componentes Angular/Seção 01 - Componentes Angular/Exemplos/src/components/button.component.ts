import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  buttonText: string = 'ACCESS';

  getAlert(): void {
    alert(`Hello! This button text is "${this.label}"`);
  }
}
