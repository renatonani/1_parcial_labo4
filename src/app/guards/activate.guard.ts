import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const activateGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).logeado;  
};
