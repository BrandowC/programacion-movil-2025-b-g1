import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // ...existing code...

  // Simulación de registro/login (reemplazar por integración real)
  async register(email: string, password: string) {
    // validar password >= 8
    if (password.length < 8) throw new Error('Password too short');
    // persistir user (temporal)
    return { email };
  }

  async login(email: string, password: string) {
    // lógica de autenticación
    return { token: 'fake-jwt-token', email };
  }

  async logout() {
    // limpiar sesión
  }
}
