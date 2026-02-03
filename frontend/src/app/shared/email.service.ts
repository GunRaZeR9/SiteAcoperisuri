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
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // From Account > API Keys
  private readonly CONTACT_SERVICE_ID = 'YOUR_SERVICE_ID'; // From Email Services
  private readonly CONTACT_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID'; // From Email Templates
  private readonly ESTIMATE_TEMPLATE_ID = 'YOUR_ESTIMATE_TEMPLATE_ID'; // From Email Templates

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
        message: data.message,
        to_email: 'caseacoperisuri68@gmail.com' // Your business email
      };

      await emailjs.send(
        this.CONTACT_SERVICE_ID,
        this.CONTACT_TEMPLATE_ID,
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
        description: data.description,
        to_email: 'caseacoperisuri68@gmail.com' // Your business email
      };

      await emailjs.send(
        this.CONTACT_SERVICE_ID,
        this.ESTIMATE_TEMPLATE_ID,
        templateParams
      );
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send email');
    }
  }

  /**
   * Check if EmailJS is properly configured
   */
  isConfigured(): boolean {
    return this.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
           this.CONTACT_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
           this.CONTACT_TEMPLATE_ID !== 'YOUR_CONTACT_TEMPLATE_ID';
  }
}
