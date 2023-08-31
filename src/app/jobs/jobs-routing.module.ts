import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { SingleJobComponent } from './single-job/single-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobsListingComponent,
  },
  {
    path: ':id',
    component: SingleJobComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
