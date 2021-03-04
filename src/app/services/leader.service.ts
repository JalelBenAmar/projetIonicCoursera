import { baseURL } from './../../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Leader } from 'src/shared/leader';
import { catchError, map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
      .pipe(
        retry(1),
        catchError(this.processHttpmsgService.errorHandl)
      )
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/'+id)
    .pipe(
      retry(1),
      catchError(this.processHttpmsgService.errorHandl)
    )
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders?featured=true')
    .pipe(
      retry(1),
      catchError(this.processHttpmsgService.errorHandl)
    )
  }
}
