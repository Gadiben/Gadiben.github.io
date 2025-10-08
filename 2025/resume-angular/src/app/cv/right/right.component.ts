import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class CvRightComponent {
  @Input() cvData: any;
}
