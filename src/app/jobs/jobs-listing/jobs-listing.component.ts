import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit {
  jobs!: Job[];

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getAllJobs();
  }

  onCardCLick(cardId: number) {
    this.router.navigateByUrl(`jobs/${cardId}`);
  }
}
