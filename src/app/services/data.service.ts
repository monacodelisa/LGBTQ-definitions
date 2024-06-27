import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LGBTQTerm } from '../models/term';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();
  http = inject(HttpClient);

  constructor() { }

  getAllTerms() {
    return this.http.get<LGBTQTerm[]>('/data/lgbtq-terms.json');
  }

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}
