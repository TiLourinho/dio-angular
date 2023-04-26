import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';
import { MenuComponent } from './components/menu.component';
import { ButtonComponent } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    HelloComponent,
    MenuComponent,
    ButtonComponent,
    EntryDataComponent,
  ],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-hello></app-hello>
    <menu-component></menu-component>

    <!-- Interpolação -->
    <my-button label="{{ buttonLabel2 }}"></my-button>
    <my-button label="DELETE"></my-button>
    <br>
    
    <!-- Property Binding -->
    <my-button [label]=buttonLabel1></my-button>
    <my-button [label]="'COPY'"></my-button>
    <br>

    <!-- Two-way Binding -->
    <app-entry-data></app-entry-data>
  `,
})
export class App {
  name = 'Angular';
  buttonLabel1: string = 'Shopping Cart';
  buttonLabel2: string = 'Favorites';
}

bootstrapApplication(App);
