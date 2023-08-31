import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterData } from 'src/app/models/filterData';
import { Job } from 'src/app/models/job';
import { FilterDataSharingService } from 'src/app/services/filter-data-sharing.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit {
  jobs!: Job[];

  filterCriteria: FilterData = {
    fullTimeOnly: false,
    location: '',
    titleOrCompanyOrExpertise: '',
  };

  constructor(
    private jobService: JobService,
    private filterDataSharingService: FilterDataSharingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filterDataSharingService.currentFilterCriteria.subscribe(
      (criteria) => {
        this.filterCriteria = criteria;
        this.getJobs();
        // console.log(this.jobs);
      }
    );
  }

  getJobs() {
    this.jobs = this.jobService.getJobs(this.filterCriteria);
  }

  onCardCLick(cardId: number) {
    console.log(this.filterCriteria, this.jobs);
    this.router.navigateByUrl(`jobs/${cardId}`);
  }
}
