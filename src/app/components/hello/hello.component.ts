import { EventEmitter } from '@angular/core';
import {
  Component,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  Input,
  Output
} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: "app-hello",
  template: `
    <h2>Hello Component</h2>
    <p>{{ text }} from parent component</p>

    <button (click)="onButtonClicked()">Button in Hello</button>
  `
})

export class HelloComponent implements OnInit, OnDestroy, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked {
  @Input() text: any;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _dataService: DataService) {
  }

  ngOnInit(): void {
    console.log('child ngOnInit', this._dataService.setTextFromHello(this.text))
    this._dataService.setTextFromHello(this.text);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('child ngOnChanges', { changes });
  }

  ngOnDestroy(): void {
    // console.log('child ngOnDestroy')
  }

  ngAfterViewInit(): void {
    // console.log('child ngAfterViewInit')
  }

  ngAfterContentInit(): void {
    // console.log('child ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    // console.log('child ngAfterViewChecked')
  }

  ngAfterContentChecked(): void {
    // console.log('child ngAfterContentChecked')
  }

  onButtonClicked(): void {
    this.text = "button clicked fron hello component"
    this.buttonClicked.emit(this.text);
  }
};
