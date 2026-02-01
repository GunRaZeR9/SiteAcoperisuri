import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  formData = signal<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  isSubmitting = signal(false);
  isSubmitted = signal(false);
  hasError = signal(false);

  updateField(field: keyof ContactFormData, event: Event): void {
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.formData.update(data => ({ ...data, [field]: value }));
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    
    this.isSubmitting.set(true);
    this.hasError.set(false);

    try {
      const data = this.formData();
      
      // Format message for WhatsApp
      const message = `
🏠 *Contact Form - Site Web*

*Nume:* ${data.name}
*Email:* ${data.email}
*Telefon:* ${data.phone}

*Mesaj:*
${data.message}
      `.trim();

      const whatsappUrl = `https://wa.me/40758644107?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.isSubmitted.set(true);
      this.resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
      this.hasError.set(true);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private resetForm(): void {
    this.formData.set({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  }

  dismissSuccess(): void {
    this.isSubmitted.set(false);
  }
}
