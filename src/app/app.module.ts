import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { JobsModule } from './jobs/jobs.module';
import { JobCardDirective } from './directives/job-card.directive';

@NgModule({
  declarations: [AppComponent, JobCardDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    JobsModule,
    // FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
