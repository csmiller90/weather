import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const PARAMS = new HttpParams({
  fromObject: {
    appid: '802ec1a7e523747ae3d16eb715b2e86c',
    units: 'metric'
  }
});

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('cityName', {static: true}) cityName: ElementRef;
  apiResponse: any;
  isSearching: boolean;

    constructor(
      private httpClient: HttpClient
    ) {
      this.isSearching = false;
      this.apiResponse = [];
    }

  ngOnInit() {
    fromEvent(this.cityName.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // time in ms between key presses
      , debounceTime(1000)
      // if previous query is diffent from current
      , distinctUntilChanged()
      // subscription for response
      ).subscribe((text: string) => {
        this.isSearching = true;
        this.searchGetCall(text).subscribe((res) => {
          console.log('res', res);
          this.isSearching = false;
          this.apiResponse = res;
        }, (err) => {
          this.isSearching = false;
          this.apiResponse = err.status;
          console.log(this.apiResponse);
          console.log('error', err);
        });
      });
  }

   searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast?q=' + term + ', uk', { params: PARAMS});
  }

}
