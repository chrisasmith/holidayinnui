import { Injectable } from '@angular/core';

@Injectable()
export class GridsquareClickEventsService {

  constructor() { }

  public sendAction(action: string, payLoad: string): void {
    console.log('Button Clicked: ', action, payLoad);
  }
}
