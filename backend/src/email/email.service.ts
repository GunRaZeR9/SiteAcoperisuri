import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('EMAIL_HOST', 'smtp.gmail.com'),
      port: this.configService.get('EMAIL_PORT', 587),
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASSWORD'),
      },
    });
  }

  async sendContactForm(data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) {
    const mailOptions = {
      from: this.configService.get('EMAIL_FROM', 'noreply@acoperisuri.ro'),
      to: this.configService.get('EMAIL_TO', 'contact@acoperisuri.ro'),
      replyTo: data.email, // Customer's email for direct replies
      subject: `🏠 Contact Nou - ${data.name}`,
      html: `
        <h2>Contact Nou de pe Site</h2>
        <p><strong>Nume:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendEstimateForm(data: {
    name: string;
    email: string;
    phone: string;
    location: string;
    serviceType: string;
    roofType: string;
    roofArea: number;
    urgency: string;
    preferredContact: string;
    description?: string;
  }) {
    const mailOptions = {
      from: this.configService.get('EMAIL_FROM', 'noreply@acoperisuri.ro'),
      to: this.configService.get('EMAIL_TO', 'contact@acoperisuri.ro'),
      replyTo: data.email, // Customer's email for direct replies
      subject: `💰 Cerere Estimare Preț - ${data.name}`,
      html: `
        <h2>Cerere Nouă de Estimare Preț</h2>
        
        <h3>Date Contact:</h3>
        <ul>
          <li><strong>Nume:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Telefon:</strong> ${data.phone}</li>
          <li><strong>Locație:</strong> ${data.location}</li>
        </ul>

        <h3>Detalii Proiect:</h3>
        <ul>
          <li><strong>Tip serviciu:</strong> ${data.serviceType}</li>
          <li><strong>Tip acoperiș:</strong> ${data.roofType}</li>
          <li><strong>Suprafață:</strong> ${data.roofArea} mp</li>
          <li><strong>Urgență:</strong> ${data.urgency}</li>
          <li><strong>Contact preferat:</strong> ${data.preferredContact}</li>
        </ul>

        <h3>Descriere:</h3>
        <p>${data.description || 'N/A'}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendQuickContact(data: {
    name: string;
    phone: string;
    message: string;
  }) {
    const mailOptions = {
      from: this.configService.get('EMAIL_FROM', 'noreply@acoperisuri.ro'),
      to: this.configService.get('EMAIL_TO', 'contact@acoperisuri.ro'),
      subject: `⚡ Contact Rapid - ${data.name}`,
      html: `
        <h2>Contact Rapid de pe Site</h2>
        <p><strong>Nume:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p><em>Notă: Acest formular nu include email. Contactați clientul la numărul de telefon de mai sus.</em></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
