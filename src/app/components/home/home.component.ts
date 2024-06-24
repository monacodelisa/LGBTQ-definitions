import { Component, inject, OnInit } from '@angular/core';
import { LGBTQTerm } from '../../models/term';
import { DataService } from '../../services/data.service';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, AccordionModule, TooltipModule],
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
