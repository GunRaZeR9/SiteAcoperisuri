import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface EstimateForm {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  roofType: string;
  roofArea: string;
  location: string;
  description: string;
  urgency: string;
  preferredContact: string;
}

@Component({
  selector: 'app-estimate',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './estimate.component.html',
  styleUrl: './estimate.component.scss'
})
export class EstimateComponent {
  formData: EstimateForm = {
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    roofType: '',
    roofArea: '',
    location: '',
    description: '',
    urgency: '',
    preferredContact: 'phone'
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  serviceTypes = [
    { value: 'roofing', labelKey: 'estimate.service_types.roofing' },
    { value: 'repairs', labelKey: 'estimate.service_types.repairs' },
    { value: 'renovation', labelKey: 'estimate.service_types.renovation' },
    { value: 'waterproofing', labelKey: 'estimate.service_types.waterproofing' },
    { value: 'carpentry', labelKey: 'estimate.service_types.carpentry' },
    { value: 'attic', labelKey: 'estimate.service_types.attic' },
    { value: 'other', labelKey: 'estimate.service_types.other' }
  ];

  roofTypes = [
    { value: 'tiles', labelKey: 'estimate.roof_types.tiles' },
    { value: 'metal', labelKey: 'estimate.roof_types.metal' },
    { value: 'shingles', labelKey: 'estimate.roof_types.shingles' },
    { value: 'bitumen', labelKey: 'estimate.roof_types.bitumen' },
    { value: 'slate', labelKey: 'estimate.roof_types.slate' },
    { value: 'unknown', labelKey: 'estimate.roof_types.unknown' }
  ];

  urgencyLevels = [
    { value: 'low', labelKey: 'estimate.urgency.low' },
    { value: 'medium', labelKey: 'estimate.urgency.medium' },
    { value: 'high', labelKey: 'estimate.urgency.high' },
    { value: 'emergency', labelKey: 'estimate.urgency.emergency' }
  ];

  onSubmit(): void {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);

    // Format message for WhatsApp
    const message = `
🏠 *Estimare Preț - Cerere Nouă*

*Date Contact:*
• Nume: ${this.formData.name}
• Email: ${this.formData.email}
• Telefon: ${this.formData.phone}
• Locație: ${this.formData.location}

*Detalii Proiect:*
• Tip serviciu: ${this.formData.serviceType}
• Tip acoperiș: ${this.formData.roofType}
• Suprafață: ${this.formData.roofArea} mp
• Urgență: ${this.formData.urgency}
• Contact preferat: ${this.formData.preferredContact}

*Descriere:*
${this.formData.description || 'N/A'}
    `.trim();

    const whatsappUrl = `https://wa.me/40758644107?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 500);
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      roofType: '',
      roofArea: '',
      location: '',
      description: '',
      urgency: '',
      preferredContact: 'phone'
    };
    this.isSubmitted.set(false);
  }
}
