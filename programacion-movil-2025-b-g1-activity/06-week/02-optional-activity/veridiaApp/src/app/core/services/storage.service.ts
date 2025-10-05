import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  // ...existing code...
  // Aquí iría la abstracción de almacenamiento cifrado (ej. Web Crypto API)
  async setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async getItem(key: string) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }

  async removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
