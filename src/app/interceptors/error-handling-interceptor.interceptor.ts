import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Frontend Error: ${error.error.message}`;
        console.error('Frontend Error:', error.error.message);
      } else {
        switch (error.status) {
          case 400:
            errorMessage = 'FE: Bad Request. Please check your input.';
            break;
          case 404:
            errorMessage = 'FE: Resource not found.';
            break;
          case 500:
            errorMessage = 'BE: Internal Server Error. Please try again later.';
            break;
          default:
            errorMessage = `Unexpected Error: ${error.status}`;
        }
        console.error('Backend Error:', error.status, errorMessage);
      }

      alert(errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};
