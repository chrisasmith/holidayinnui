import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HolidayInnService {

  constructor(private http: HttpClient) { }

  public getConfig() {
    return this.http.get('../../../assets/mock-data/config.json')
  }
}
