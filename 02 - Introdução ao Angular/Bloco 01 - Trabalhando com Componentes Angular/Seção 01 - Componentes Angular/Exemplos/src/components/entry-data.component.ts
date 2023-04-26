import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
})
export class EntryDataComponent {
  placeholder: string = 'E-mail';
  placepass: string = 'Password';
  color: string = 'brown';
}
