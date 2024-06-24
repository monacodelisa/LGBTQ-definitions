import { Component, inject, OnInit } from '@angular/core';
import { LGBTQTerm } from '../../models/term';
import { DataService } from '../../services/data.service';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, AccordionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataService = inject(DataService);
  LGBTQTerms: LGBTQTerm[] = [];

  ngOnInit() {
    this.dataService.getTerms().subscribe((data) => {
      this.LGBTQTerms = data;
    });
  }

}
