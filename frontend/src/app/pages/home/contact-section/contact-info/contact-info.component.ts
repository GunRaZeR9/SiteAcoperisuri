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
      icon: '📞',
      labelKey: 'contact.phone_label',
      value: '+40 758 644 107',
      href: 'tel:+40758644107',
      type: 'link'
    },
    {
      icon: '✉️',
      labelKey: 'contact.email_label',
      value: 'caseacoperisuri68@gmail.com',
      href: 'mailto:caseacoperisuri68@gmail.com',
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
