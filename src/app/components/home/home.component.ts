import { Component, inject, OnInit } from '@angular/core';
import { LGBTQTerm } from '../../models/term';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, AccordionModule, TooltipModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataService = inject(DataService);
  LGBTQTerms: LGBTQTerm[] = [];
  filteredTerms: LGBTQTerm[] = [];
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      filter: [''],
    });
  }

  ngOnInit() {
    this.dataService.getTerms().subscribe((data) => {
      this.LGBTQTerms = data;
      this.filteredTerms = data;
    });
  }

  filterResults() {
    const text = this.filterForm.get('filter')?.value;
    if (!text) {
      this.filteredTerms = this.LGBTQTerms;
    } else {
      this.filteredTerms = this.LGBTQTerms.filter(term =>
        term.name.toLowerCase().startsWith(text.toLowerCase())
      );
    }
    console.log('this.filteredTerms: ', this.filteredTerms)
    return this.filteredTerms
  }

  clearFilter() {
    this.filteredTerms = [...this.LGBTQTerms];
    this.filterForm.get('filter')?.setValue('');
  }

  trackByTerm(index: number, term: LGBTQTerm): string {
    return term.name;
  }

  trackByType(index: number, type: { name: string; definition: string }): string {
    return type.name;
  }
}
