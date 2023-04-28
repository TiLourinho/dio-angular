import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
  implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
{

  quantity: number = 0;

  increment() {
    this.quantity += 1;  
  }

  decrement() {
    if (this.quantity > 0) this.quantity -= 1;
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentChecked");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
}
