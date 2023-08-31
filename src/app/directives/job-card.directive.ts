import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[job-card]',
})
export class JobCardDirective {
  constructor(
    private router: Router,
    private refElement: ElementRef<HTMLElement>
  ) {}

  @HostListener('click')
  onCardClick() {
    console.log(this.refElement.nativeElement);
  }
}
