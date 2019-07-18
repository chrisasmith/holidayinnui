import {Component, Input, OnInit} from '@angular/core';
import {GridSquare} from "../../../models/config.model";
import {GridsquareClickEventsService} from "./gridsquare-click-events.service";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  providers: [GridsquareClickEventsService]
})
export class RowComponent implements OnInit {
  @Input() set data(val: GridSquare[]) {
    this.rowData = val;
  }
  @Input() set color(val: string) {
    this.rowColor = val;
  }

  public rowData: GridSquare[];
  public rowColor: string;

  constructor(public clickEventSrv: GridsquareClickEventsService) { }

  ngOnInit() {
  }

  public onGridSquareClick(idx: number, disabled: boolean): void {
    if(!disabled) {
      const {action, url} = this.rowData[idx];
      this.clickEventSrv.sendAction(action, url);
    }
  }

    public setBgColor(type: string, idx: number): string {
        return type === 'filler' ?
            `repeating-linear-gradient(
          -45deg,
          ${this.rowColor}, ${this.rowColor} 20px, 
          ${this.LightenDarkenColor(this.rowColor, 10)} 20px, 
          ${this.LightenDarkenColor(this.rowColor, 10)} 40px)` : this.pickBgShade(idx);
    }

    private pickBgShade(idx: number): string {
      return (idx % 2) === 0 ? this.LightenDarkenColor(this.rowColor, 10) : this.rowColor;
    }

    private LightenDarkenColor(color, percent): string {
        let num = parseInt(color.replace("#",""), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            B = (num >> 8 & 0x00FF) + amt,
            G = (num & 0x0000FF) + amt;
        return `#${(0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1)}`;
    }
}
