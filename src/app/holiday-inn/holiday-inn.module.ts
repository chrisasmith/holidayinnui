import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HolidayInnComponent} from "./holiday-inn.component";
import {HeaderComponent} from "../shared/components/core/header/header.component";
import {FooterComponent} from "../shared/components/core/footer/footer.component";
import {MatButtonModule, MatIconModule} from "@angular/material";
import { RowComponent } from '../shared/components/ui/row/row.component';
import {NavGridComponent} from "../shared/components/ui/nav-grid/nav-grid.component";
import {GridSquareComponent} from "../shared/components/ui/grid-square/grid-square.component";

@NgModule({
  declarations: [
      HolidayInnComponent,
      HeaderComponent,
      FooterComponent,
      NavGridComponent,
      RowComponent,
      GridSquareComponent
  ],
  imports: [
    CommonModule,
      MatButtonModule,
      MatIconModule
  ],
  exports: [
      HolidayInnComponent
  ]
})
export class HolidayInnModule { }
