import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.scss'],
})
export class SingleJobComponent implements OnInit {
  private jobId!: number;

  job!: Job;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];

    const job = this.jobService.findJobById(+this.jobId);

    if (job) this.job = job;

    console.log(this.job);
  }
}
