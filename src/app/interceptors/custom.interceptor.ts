import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer your-auth-token',
    },
  });
  return next(modifiedReq);
};
