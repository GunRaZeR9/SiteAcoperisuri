import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input() subtitle = '';
  @Input() title = '';
  @Input() description = '';
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
  @Input() light = false;
}
