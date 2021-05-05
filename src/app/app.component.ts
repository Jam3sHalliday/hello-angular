import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1 [class.with-border]="withBorder" [style.color]="textColor">
      {{ title }}
    </h1>
    <button (click)="onButtonClick()">
      {{ withBorder ? 'Hide' : 'Show' }}
    </button>

    <app-hello [text]="title" (buttonClicked)="onButtonClickedFromHello($event)" ></app-hello>
    <app-hi></app-hi>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked {
  title = "Helloz";
  imageSrc = "https://picsum.photos/200";

  textColor = "tomato";
  withBorder = true;

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', { changes });
  }

  ngOnDestroy(): void {
    // console.log("ngOnDestroy")
  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit")
  }

  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit")
  }

  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked")
  }

  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked")
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
    this.title = "changed"
  }

  onButtonClickedFromHello(event: any) {
    console.log('-------', event)
    this.title = event;
  }
}
