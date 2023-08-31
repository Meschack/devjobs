import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JobCardComponent } from './job-card/job-card.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ThemeSwitcherComponent,
    SearchBarComponent,
    JobCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavBarComponent,
    ThemeSwitcherComponent,
    SearchBarComponent,
    JobCardComponent,
  ],
})
export class SharedModule {}
