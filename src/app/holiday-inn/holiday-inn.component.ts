import {Component, OnDestroy, OnInit} from '@angular/core';
import {HolidayInnService} from "./services/holiday-inn.service";
import {Config, NavGrid} from "../shared/models/config.model";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-holiday-inn',
  templateUrl: './holiday-inn.component.html',
  styleUrls: ['./holiday-inn.component.scss'],
    providers: [HolidayInnService]
})
export class HolidayInnComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject<void>();
  public config: NavGrid[];

  public navGridCount = 0;

  constructor(private holidayInnSrv: HolidayInnService) { }

  ngOnInit() {
    this.holidayInnSrv.getConfig()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((c: Config) => {
          this.config = c.navGrids;
          this.navGridCount = c.navGrids.length;
        });
  }

  ngOnDestroy(): void {

  }

}
