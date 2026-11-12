import { Component, HostListener, OnInit, OnDestroy, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  scrollProgress = 0;
  currentSection = 'home';

  private resizeListener?: () => void;
  private sectionObserver?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.setupResizeListener();
  }

  ngAfterViewInit() {
    // Wait until the sibling section components are rendered before observing them
    setTimeout(() => this.setupSectionObserver(), 0);
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const wasScrolled = this.isScrolled;
    this.isScrolled = window.scrollY > 20;
    this.updateScrollProgress();

    // Only trigger change detection if state changed
    if (wasScrolled !== this.isScrolled) {
      this.cdr.detectChanges();
    }
  }

  private setupSectionObserver() {
    const sections = ['home', 'about', 'projects', 'skills', 'footer'];

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const oldSection = this.currentSection;
          this.currentSection = entry.target.id;
          this.updateActiveNavLink();

          // Only trigger change detection if section changed
          if (oldSection !== this.currentSection) {
            this.cdr.detectChanges();
          }
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-10% 0px -70% 0px'
    });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        this.sectionObserver!.observe(element);
      }
    });
  }

  private setupResizeListener() {
    this.resizeListener = () => {
      // Close mobile menu on resize to larger screen
      if (window.innerWidth >= 1024 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    };

    window.addEventListener('resize', this.resizeListener, { passive: true });
  }

  private updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;

    // Update CSS custom property for scroll progress indicator
    document.documentElement.style.setProperty('--scroll-progress', `${this.scrollProgress}%`);
  }

  private updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${this.currentSection}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Enhanced click outside functionality
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const mobileMenu = document.getElementById('mobile-navigation');
    const menuButton = target.closest('button[aria-controls="mobile-navigation"]');

    if (this.isMobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(target) &&
        !menuButton) {
      this.closeMobileMenu();
    }
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string, event?: Event) {
    event?.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      this.closeMobileMenu();
    }
  }

  // Keyboard navigation support
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
