import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration Service
 * 
 * Setup Instructions:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Add an email service (Gmail, Outlook, etc.)
 * 3. Create email templates for contact and estimate forms
 * 4. Get your public key from Account > API Keys
 * 5. Update the configuration below with your credentials
 */

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  // ⚠️ REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
  // Get them from: https://dashboard.emailjs.com/
  private readonly PUBLIC_KEY = 'BJkQ-6ULufe4oJiFR'; // From Account > API Keys
  private readonly SERVICE_ID = 'service_8vx8z7l'; // From Email Services
  private readonly TEMPLATE_ID = 'template_z6sx5re'; // From Email Templates (just create ONE template)

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.PUBLIC_KEY);
  }

  /**
   * Send contact form email
   */
  async sendContactEmail(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }): Promise<void> {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send email');
    }
  }

  /**
   * Send estimate form email
   */
  async sendEstimateEmail(data: {
    name: string;
    email: string;
    phone: string;
    location: string;
    serviceType: string;
    roofType: string;
    roofArea: string;
    urgency: string;
    preferredContact: string;
    description: string;
  }): Promise<void> {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        location: data.location,
        service_type: data.serviceType,
        roof_type: data.roofType,
        roof_area: data.roofArea,
        urgency: data.urgency,
        preferred_contact: data.preferredContact,
        description: data.description
      };

      console.log('Sending estimate email with params:', templateParams);
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );
      console.log('EmailJS Success:', response);
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      throw new Error('Failed to send email');
    }
  }

  /**
   * Check if EmailJS is properly configured
   */
  isConfigured(): boolean {
    return this.PUBLIC_KEY.length > 0 &&
           this.SERVICE_ID.length > 0 &&
           this.TEMPLATE_ID.length > 0;
  }
}
