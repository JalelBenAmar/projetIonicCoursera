import { baseURL } from './../../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dish } from 'src/shared/dish';
import { catchError, map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(
        retry(1),
        catchError(this.processHttpmsgService.errorHandl)
      )
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/'+id)
    .pipe(
      retry(1),
      catchError(this.processHttpmsgService.errorHandl)
    )
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true')
    .pipe(
      retry(1),
      catchError(this.processHttpmsgService.errorHandl)
    )
  }
}
