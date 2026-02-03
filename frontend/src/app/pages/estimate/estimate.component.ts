import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EmailService } from '../../shared/email.service';

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
  private translate = inject(TranslateService);
  private emailService = inject(EmailService);
  
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

  async onSubmit(): Promise<void> {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);

    // Get translated labels for the values
    const serviceTypeLabel = this.serviceTypes.find(s => s.value === this.formData.serviceType)?.labelKey;
    const roofTypeLabel = this.roofTypes.find(r => r.value === this.formData.roofType)?.labelKey;
    const urgencyLabel = this.urgencyLevels.find(u => u.value === this.formData.urgency)?.labelKey;
    
    const serviceTypeText = serviceTypeLabel ? this.translate.instant(serviceTypeLabel) : this.formData.serviceType;
    const roofTypeText = roofTypeLabel ? this.translate.instant(roofTypeLabel) : this.formData.roofType;
    const urgencyText = urgencyLabel ? this.translate.instant(urgencyLabel) : this.formData.urgency;
    const contactPrefText = this.translate.instant(`estimate.contact_${this.formData.preferredContact}`);

    try {
      await this.emailService.sendEstimateEmail({
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        location: this.formData.location,
        serviceType: serviceTypeText,
        roofType: roofTypeText,
        roofArea: this.formData.roofArea,
        urgency: urgencyText,
        preferredContact: contactPrefText,
        description: this.formData.description || ''
      });
      
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      this.isSubmitting.set(false);
      alert('Eroare la trimiterea formularului. Vă rugăm încercați din nou sau contactați-ne direct la telefon.');
    }
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
