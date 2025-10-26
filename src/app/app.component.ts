import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'buildwithme';
  showScrollTop: boolean = false;

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 50,
      delay: 0,
      anchorPlacement: 'top-center',
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
    this.initCustomCursor();
  }

  ngAfterViewInit() {
    // Refresh AOS and trigger animations immediately
    setTimeout(() => {
      AOS.refresh();

      // Trigger animations for all elements with AOS
      setTimeout(() => {
        const aosElements = document.querySelectorAll('[data-aos]');
        aosElements.forEach((element, index) => {
          element.classList.add('aos-animate');
        });
      }, 100);
    }, 50);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.15;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    const interactiveElements = document.querySelectorAll('a, button, .social-icon, .group');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = 'radial-gradient(circle, rgba(6, 182, 212, 1) 0%, rgba(6, 182, 212, 0.6) 70%, transparent 100%)';
        cursor.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.6)';
      });

      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0.4) 70%, transparent 100%)';
        cursor.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)';
      });
    });
  }
}




