
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})

export class Cv implements OnInit {
  cvData: any = null;

  async ngOnInit() {
    const response = await fetch('/src/assets/cv-data.json');
    this.cvData = await response.json();
  }
}
