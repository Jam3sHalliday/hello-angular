import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
}) // dependency injection
export class DataService {
  private _textFromHello: any;

  get textFromHello(): string {
    return this._textFromHello;
  }

  setTextFromHello(text: string) {
    this._textFromHello = text;
  }
}
