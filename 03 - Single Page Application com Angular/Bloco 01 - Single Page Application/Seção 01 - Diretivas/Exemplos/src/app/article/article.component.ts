import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  style: string = "disable";
  fontColor: string = "white";
  backgroundColor: string = "red";
  item: string = "";
  list: string[] = [];
  isEnableBlock: boolean = true;

  changeClass() {
    this.style === "disable" ? this.style = "enable" : this.style = "disable";
  }

  addList() {
    this.list.push(this.item);
  }
}
