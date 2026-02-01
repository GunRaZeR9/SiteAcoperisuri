import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImagePlaceholderComponent } from '../../shared/image-placeholder/image-placeholder.component';
import { SERVICES_DATA, ServiceData } from './services.data';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, ImagePlaceholderComponent],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent {
  services: ServiceData[] = SERVICES_DATA;
}
