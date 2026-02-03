import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactFormDto, EstimateFormDto, QuickContactDto } from './dto/forms.dto';

@Controller('forms')
export class FormsController {
  // Email sending is handled by EmailJS on the frontend
  // These endpoints now just validate the data

  @Post('contact')
  @HttpCode(HttpStatus.OK)
  async submitContactForm(@Body() contactData: ContactFormDto) {
    // Data validation is handled by the DTO
    return { success: true, message: 'Contact form submitted successfully' };
  }

  @Post('estimate')
  @HttpCode(HttpStatus.OK)
  async submitEstimateForm(@Body() estimateData: EstimateFormDto) {
    // Data validation is handled by the DTO
    return { success: true, message: 'Estimate form submitted successfully' };
  }

  @Post('quick-contact')
  @HttpCode(HttpStatus.OK)
  async submitQuickContact(@Body() quickContactData: QuickContactDto) {
    // Data validation is handled by the DTO
    return { success: true, message: 'Quick contact submitted successfully' };
  }
}
