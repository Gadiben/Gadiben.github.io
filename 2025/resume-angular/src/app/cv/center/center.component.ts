import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDisplayPipe } from '../filter-display.pipe';

@Component({
  selector: 'cv-center',
  standalone: true,
  imports: [CommonModule, FilterDisplayPipe],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CvCenterComponent {
  @Input() cvData: any;
}
