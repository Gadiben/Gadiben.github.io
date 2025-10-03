
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as cv_fr from '../../assets/cv-data.fr.json';
import * as cv_en from '../../assets/cv-data.en.json';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})

export class Cv implements OnInit {
  cvData: any = null;
  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    let lang = this.route.snapshot.data['lang'] || 'fr';
    this.cvData = lang === 'en' ? cv_en : cv_fr;
  }
}
