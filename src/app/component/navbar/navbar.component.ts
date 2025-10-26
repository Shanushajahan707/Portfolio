import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  scrollProgress = 0;
  currentSection = 'home';

  private scrollListener?: () => void;
  private resizeListener?: () => void;

  ngOnInit() {
    this.setupScrollProgress();
    this.setupSectionObserver();
    this.setupResizeListener();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
    this.updateScrollProgress();
    this.updateCurrentSection();
  }

  private setupScrollProgress() {
    this.scrollListener = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = (scrollTop / docHeight) * 100;

      // Update CSS custom property for scroll progress indicator
      document.documentElement.style.setProperty('--scroll-progress', `${this.scrollProgress}%`);
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  private setupSectionObserver() {
    const sections = ['home', 'about', 'projects', 'skills', 'footer'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;
          this.updateActiveNavLink();
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-20% 0px -80% 0px'
    });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
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

  private updateCurrentSection() {
    const sections = ['home', 'about', 'projects', 'skills', 'footer'];
    let current = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }

    if (current && current !== this.currentSection) {
      this.currentSection = current;
      this.updateActiveNavLink();
    }
  }

  private updateActiveNavLink() {
    // Update active states in both desktop and mobile navigation
    setTimeout(() => {
      const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${this.currentSection}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, 100);
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
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuButton = document.querySelector('.mobile-menu-button');

    if (this.isMobileMenuOpen &&
        !mobileMenu?.contains(target) &&
        !menuButton?.contains(target)) {
      this.closeMobileMenu();
    }
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string) {
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
