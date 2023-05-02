import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title: string = "Card Component is working!";
  showP: boolean = false;
  products: string[] = ["Mouse", "Keyboard", "USB Cable", "Mouse Pad"];
  inputProducts: string = "";
  menuType: string = "admin";

  add() {
    this.products.push(this.inputProducts);
    console.log(this.products);
  }

  remove(index: number) {
    this.products.splice(index, 1);
  }

  enterKey(event: any) {
    this.add();
  }
}
