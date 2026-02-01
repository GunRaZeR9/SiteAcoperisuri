import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImagePlaceholderComponent } from '../../shared/image-placeholder/image-placeholder.component';
import { getServiceBySlug, ServiceData, SERVICES_DATA } from './services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, ImagePlaceholderComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  service = signal<ServiceData | null>(null);
  otherServices = signal<ServiceData[]>([]);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const foundService = getServiceBySlug(slug);
      this.service.set(foundService || null);
      
      // Get other services for the sidebar
      this.otherServices.set(
        SERVICES_DATA.filter(s => s.slug !== slug)
      );
    });
  }
}
