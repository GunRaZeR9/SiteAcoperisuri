import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReasonItem } from '../why-choose-us.component';

@Component({
  selector: 'app-reason-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reason-card.component.html',
  styleUrl: './reason-card.component.scss'
})
export class ReasonCardComponent {
  @Input() reason!: ReasonItem;
  @Input() index = 0;
}
