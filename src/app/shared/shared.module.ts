import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavBarComponent,
    ThemeSwitcherComponent,
    SearchBarComponent,
    JobCardComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavBarComponent,
    ThemeSwitcherComponent,
    SearchBarComponent,
    JobCardComponent,
  ],
})
export class SharedModule {}
