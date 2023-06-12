import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from 'rxjs';

export class HttpClientService {

    protected headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    protected handleError(error: HttpErrorResponse): Observable<any> {

        let message: string = 'Server Error';

            if (typeof error.error.message !== 'undefined') {
                message = error.error.message;
                alert(message);
            }

        return throwError(error);

    }
}