import {Component, Input, OnInit} from '@angular/core';
import {GridSquare, NavGrid} from "../../../models/config.model";

@Component({
  selector: 'app-nav-grid',
  templateUrl: './nav-grid.component.html',
  styleUrls: ['./nav-grid.component.scss']
})
export class NavGridComponent implements OnInit {
  @Input() set data(val: NavGrid) {
    this.gridData = val.gridRows;
    this.gridColor = val.color;
  }

  public gridData: GridSquare[];
  public gridColor: string;

  constructor() { }

  ngOnInit() {
  }
}
