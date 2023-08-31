import { Component } from '@angular/core';
import { FilterData } from 'src/app/models/filterData';
import { FilterDataSharingService } from 'src/app/services/filter-data-sharing.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  filterData: FilterData = {
    titleOrCompanyOrExpertise: '',
    location: '',
    fullTimeOnly: false,
  };

  constructor(private filterDataSharingService: FilterDataSharingService) {}

  onSubmit() {
    this.filterDataSharingService.updateFilterCriteria(this.filterData);
  }
}
