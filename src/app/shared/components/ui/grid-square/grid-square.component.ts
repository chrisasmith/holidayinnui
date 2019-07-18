import {Component, Input, OnInit} from '@angular/core';
import {GridSquare} from "../../../models/config.model";

@Component({
  selector: 'app-grid-square',
  templateUrl: './grid-square.component.html',
  styleUrls: ['./grid-square.component.scss']
})
export class GridSquareComponent implements OnInit {
  @Input() set data(val: GridSquare) {
      this.square = val;
  }
  @Input() set color(val: string) {
      this.squareColor = val;
  }

  public square: GridSquare;
  public squareColor = '#00ff00';
  constructor() { }

  ngOnInit() {
  }
}
