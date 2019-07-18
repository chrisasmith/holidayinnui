import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-404/page-not-found.component';
import {HolidayInnModule} from "../holiday-inn/holiday-inn.module";

export function holidayInnChildren(): any {
  return HolidayInnModule;
}

export const routes: Routes = [
  {
    path: '/holidayInn',
    loadChildren: holidayInnChildren,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, {
      useHash: true,
      enableTracing: false
    }),
  ],
  providers: [
  ],
  declarations: [
    PageNotFoundComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
