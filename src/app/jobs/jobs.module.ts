import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { SingleJobComponent } from './single-job/single-job.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [JobsListingComponent, SingleJobComponent],
  exports: [JobsListingComponent, SingleJobComponent],
  imports: [CommonModule, JobsRoutingModule, SharedModule],
})
export class JobsModule {}
