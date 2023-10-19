import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const activateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (authService.isUserAuthenticated()) {
    return true; 
  } else {
    const router = inject(Router);
    router.navigate(['/login']); 
    return false; 
  }
};
