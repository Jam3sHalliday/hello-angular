import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1
      [ngStyle]="{color: textColor, background: backgroundColor1}"
      [ngClass]="{
        'with-border': withBorder,
        'other-class': true
      }"
    >
      {{ title }}
    </h1>
    <img [src]="imgSrc" />
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'Angula31r';
  imgSrc: string = "https://picsum.photos/200";

  textColor = '#d23d12';
  backgroundColor1 = "#f12f11";
  withBorder = true;
}
