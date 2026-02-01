import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  private http = inject(HttpClient);
  
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

    const data = this.formData();
    
    // Prepare data for backend
    const contactData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    };

    // Send to backend
    this.http.post('http://localhost:3000/forms/quick-contact', contactData)
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.isSubmitted.set(true);
          this.resetForm();
        },
        error: (err) => {
          console.error('Error submitting form:', err);
          this.isSubmitting.set(false);
          this.hasError.set(true);
        }
      });
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
