import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { AboutPreviewComponent } from './about-preview/about-preview.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ServicesOverviewComponent,
    WhyChooseUsComponent,
    AboutPreviewComponent,
    ContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
