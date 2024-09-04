import { HttpInterceptorFn } from '@angular/common/http';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Intercepting request');
  // Modify the request URL here
  let url = process.env['ApiUrl'] || 'UNDEFINED';

  const modifiedRequest = req.clone({
    url: `${url}/${req.url}`,
  });

  return next(modifiedRequest);
};

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'YOUR_AUTH_TOKEN_HERE';

  const authReq = req.clone({});

  return next(authReq);
};
