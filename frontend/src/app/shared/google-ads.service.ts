import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Service for tracking Google Ads conversions
 * Supports:
 * - Phone call conversions (call tracking)
 * - Form submission conversions (estimate and contact forms)
 */
@Injectable({
  providedIn: 'root'
})
export class GoogleAdsService {
  private document = inject(DOCUMENT);
  
  /**
   * Track a conversion event
   * @param conversionId - Google Ads conversion ID (e.g., 'AW-123456789/abc-123')
   * @param value - (Optional) Conversion value
   * @param currency - (Optional) Currency code (default: 'RON')
   */
  trackConversion(conversionId: string, value?: number, currency: string = 'RON'): void {
    if (!conversionId || typeof gtag === 'undefined') {
      console.warn('Google Ads conversion tracking not available or conversion ID missing');
      return;
    }

    try {
      const conversionData: any = {
        'value': value || 1,
        'currency': currency
      };

      // Use gtag to track conversion
      gtag('event', 'conversion', {
        'conversion_id': conversionId,
        ...conversionData
      });

      console.log('Google Ads conversion tracked:', conversionId);
    } catch (error) {
      console.error('Error tracking Google Ads conversion:', error);
    }
  }

  /**
   * Track phone call (call extension click)
   * Call duration 30-60 seconds will be tracked automatically by Google Ads
   * @param conversionId - Google Ads phone call conversion ID
   */
  trackPhoneCall(conversionId: string): void {
    this.trackConversion(conversionId);
  }

  /**
   * Track form submission (estimate or contact form)
   * @param formType - Type of form ('estimate' or 'contact')
   * @param conversionId - Google Ads form submission conversion ID
   * @param formData - (Optional) Form data for additional tracking
   */
  trackFormSubmission(
    formType: 'estimate' | 'contact',
    conversionId: string,
    formData?: { [key: string]: any }
  ): void {
    const conversionValue = formType === 'estimate' ? 1 : 1;
    
    const eventData: any = {
      'event_category': 'form_submission',
      'event_label': formType,
      'value': conversionValue,
      'currency': 'RON'
    };

    // Add optional form data
    if (formData) {
      if (formData['serviceType']) {
        eventData['service_type'] = formData['serviceType'];
      }
      if (formData['location']) {
        eventData['location'] = formData['location'];
      }
    }

    try {
      // Track conversion using gtag
      gtag('event', 'conversion', {
        'conversion_id': conversionId,
        ...eventData
      });

      console.log(`Google Ads conversion tracked - ${formType} form:`, conversionId);
    } catch (error) {
      console.error('Error tracking form submission:', error);
    }
  }

  /**
   * Add click tracking to phone call links
   * Tracks when user clicks a tel: link
   * @param phoneNumber - Phone number (e.g., '+40759578727')
   * @param conversionId - Google Ads conversion ID
   */
  trackPhoneClick(phoneNumber: string, conversionId: string): void {
    if (typeof gtag === 'undefined') {
      console.warn('Google Ads tracking not available');
      return;
    }

    try {
      gtag('event', 'call_click', {
        'phone_number': phoneNumber,
        'conversion_id': conversionId
      });

      console.log('Phone click tracked:', phoneNumber);
    } catch (error) {
      console.error('Error tracking phone click:', error);
    }
  }
}

// Declare gtag for TypeScript
declare let gtag: (...args: any[]) => void;
