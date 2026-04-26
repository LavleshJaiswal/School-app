import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);

  const token = localStorage.getItem('token');

  // Clone request and attach token
  const newReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    : req;

  return next(newReq).pipe(

    // ✅ THIS IS WHERE YOUR CODE GOES
    catchError((err) => {

      if (err.status === 401) {
        alert('Session expired. Please login again');

        // remove token
        localStorage.removeItem('token');

        // redirect to login
        router.navigate(['/login']);
      }

      return throwError(() => err);
    })
  );
};