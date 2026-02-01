import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  contactDetails = [
    {
      icon: '🏢',
      labelKey: 'contact.company_label',
      value: 'Acoperișuri S.R.L.',
      type: 'text'
    },
    {
      icon: '📍',
      labelKey: 'contact.address_label',
      valueKey: 'contact.address_value',
      type: 'address'
    },
    {
      icon: '📞',
      labelKey: 'contact.phone_label',
      value: '+40 700 000 000',
      href: 'tel:+40700000000',
      type: 'link'
    },
    {
      icon: '✉️',
      labelKey: 'contact.email_label',
      value: 'contact@acoperisuri.ro',
      href: 'mailto:contact@acoperisuri.ro',
      type: 'link'
    },
    {
      icon: '🕐',
      labelKey: 'contact.hours_label',
      valueKey: 'contact.hours_value',
      type: 'text'
    }
  ];
}
