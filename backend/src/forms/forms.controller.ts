import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { ContactFormDto, EstimateFormDto, QuickContactDto } from './dto/forms.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly emailService: EmailService) {}

  @Post('contact')
  @HttpCode(HttpStatus.OK)
  async submitContactForm(@Body() contactData: ContactFormDto) {
    try {
      await this.emailService.sendContactForm(contactData);
      return { success: true, message: 'Contact form submitted successfully' };
    } catch (error) {
      throw error;
    }
  }

  @Post('estimate')
  @HttpCode(HttpStatus.OK)
  async submitEstimateForm(@Body() estimateData: EstimateFormDto) {
    try {
      await this.emailService.sendEstimateForm(estimateData);
      return { success: true, message: 'Estimate form submitted successfully' };
    } catch (error) {
      throw error;
    }
  }

  @Post('quick-contact')
  @HttpCode(HttpStatus.OK)
  async submitQuickContact(@Body() quickContactData: QuickContactDto) {
    try {
      await this.emailService.sendQuickContact(quickContactData);
      return { success: true, message: 'Quick contact submitted successfully' };
    } catch (error) {
      throw error;
    }
  }
}
