import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  contactInfo = [
    { icon: '📍', labelKey: 'contact.address_label', valueKey: 'contact.address_value' },
    { icon: '📞', labelKey: 'contact.phone_label', value: '+40 700 000 000', link: 'tel:+40700000000' },
    { icon: '✉️', labelKey: 'contact.email_label', value: 'contact@acoperisuri.ro', link: 'mailto:contact@acoperisuri.ro' },
    { icon: '⏰', labelKey: 'contact.hours_label', valueKey: 'contact.hours_value' }
  ];

  onSubmit(): void {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);

    // Log form data to console
    console.log('Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      ...this.formData
    });

    // Simulate API delay
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 1000);
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.isSubmitted.set(false);
  }
}
