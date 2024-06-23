import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LGBTQTerm } from '../models/term';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http = inject(HttpClient);

  constructor() { }

  getTerms() {
    return this.http.get<LGBTQTerm[]>('/data/lgbtq-terms.json');
  }
}
