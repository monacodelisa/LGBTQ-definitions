import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LGBTQTerm } from '../../models/term';
import { DataService } from '../../services/data.service';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, AccordionModule, TooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  LGBTQTerms: LGBTQTerm[] = [];
  private searchTermSubscription!: Subscription;
  dataService = inject(DataService);

  ngOnInit() {
    this.searchTermSubscription = this.dataService.searchTerm$.subscribe((searchTerm) => {
      this.loadTerms(searchTerm);
    });
  }
  private loadTerms(searchTerm: string) {
    this.dataService.getAllTerms().subscribe((data) => {
      if (searchTerm === '') {
        this.LGBTQTerms = data;
      } else {
        this.LGBTQTerms = data.filter((term) =>
          term.name.toLowerCase().includes(searchTerm.toLowerCase()) || term.types.some((type) => type.name.toLowerCase().includes(searchTerm.toLowerCase())) || term.types.some((type) => type.definition.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }
    });
  }

  ngOnDestroy() {
    if (this.searchTermSubscription) {
      this.searchTermSubscription.unsubscribe();
    }
  }
}
