import { Promotion } from './../../shared/promotion';
import { BaseURL } from './../../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(BaseURL + 'promotions')
      .pipe(
        retry(1),
        catchError(this.processHttpmsgService.errorHandl)
      )
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(BaseURL + 'promotions/'+id)
    .pipe(
      retry(1),
      catchError(this.processHttpmsgService.errorHandl)
    )
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>(BaseURL + 'promotions?featured=true')
    .pipe(
      retry(1),
      catchError(this.processHttpmsgService.errorHandl)
    )
  }
}
