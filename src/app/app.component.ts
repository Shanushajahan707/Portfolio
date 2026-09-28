import { Component, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'buildwithme';

  showScrollTop: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const wasVisible = this.showScrollTop;
    this.showScrollTop = window.scrollY > 300;

    // Only trigger change detection if state changed
    if (wasVisible !== this.showScrollTop) {
      this.cdr.detectChanges();
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
