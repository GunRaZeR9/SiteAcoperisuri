import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SectionTitleComponent,
    ContactInfoComponent
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {}
