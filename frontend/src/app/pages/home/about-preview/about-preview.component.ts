import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './about-preview.component.html',
  styleUrl: './about-preview.component.scss'
})
export class AboutPreviewComponent {}
