import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterData } from '../models/filterData';

@Injectable({
  providedIn: 'root',
})
export class FilterDataSharingService {
  filterCriteriaSource = new BehaviorSubject<FilterData>({
    fullTimeOnly: false,
    location: '',
    titleOrCompanyOrExpertise: '',
  });

  currentFilterCriteria = this.filterCriteriaSource.asObservable();

  updateFilterCriteria(criteria: FilterData) {
    this.filterCriteriaSource.next(criteria);
  }
}
