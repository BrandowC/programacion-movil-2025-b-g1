import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../../core/services/auth';

@Component({
  standalone: true,
  selector: 'app-account-registration',
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.scss']
})
export class AccountRegistrationComponent {
  modelo = { nombre: '', email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async registrar() {
    if (!this.modelo.nombre || !this.modelo.email || !this.modelo.password) {
      return this.showToast('Completa todos los campos.');
    }

    const loading = await this.loadingCtrl.create({ message: 'Registrando...' });
    await loading.present();

    try {
      const ok = await this.authService.register(this.modelo.nombre, this.modelo.email, this.modelo.password);
      await loading.dismiss();
      if (ok) {
        await this.showToast('Registro exitoso. Puedes iniciar sesión.');
        this.router.navigate(['/login']);
      } else {
        this.showToast('El email ya está registrado.');
      }
    } catch (err) {
      await loading.dismiss();
      console.error('Registro error', err);
      this.showToast('Error al registrar. Intenta de nuevo.');
    }
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

  private async showToast(message: string) {
    const t = await this.toastCtrl.create({ message, duration: 2000, position: 'bottom' });
    await t.present();
  }
}