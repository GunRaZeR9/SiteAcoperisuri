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
      // Log to console as requested
      console.log('Contact Form Submission:', this.formData());
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production, this would call the backend API:
      // await this.http.post('/api/contact', this.formData()).toPromise();
      
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
