import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClientService } from './http/http-client.service';
  
@Injectable({
  providedIn: 'root'
})

export class HomeService extends HttpClientService {

  constructor(private http: HttpClient) { 
    super();
  }

  getData(): Promise<Response> {
    return this.http.get('/api/home/data')
    .pipe(
      catchError(this.handleError),
    ).toPromise();
  }
}
