import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  standalone: false,
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyprojectsComponent {
  projects = [
    {
      title: 'Belles Avenue',
      image: '/bellesavenue.png',
      description:
        'Belles Avenue, a fashion and beauty shop. Built with Angular, Tailwind CSS, and integrated with a digital billing system.',
      liveDemo: 'https://bellesavenue.vercel.app',
      github: 'https://github.com/Shanushajahan707/digitalbilling-frontend',
      type: 'Web Application',
    },
    {
      title: 'Live Streaming Platform',
      image: '/capturelive.png',
      description:
        'A one-to-many live streaming platform using WebRTC, Angular 17, and Node.js.',
      liveDemo: 'https://capture-live.vercel.app/',
      github: 'https://github.com/Shanushajahan707/Live-Stream-Frontend',
      type: 'Web Application',
    },
    {
      title: 'MEAN Auth App',
      image: '/meanauth.png',
      description:
        'A secure authentication system with JWT, Angular Router, and Ngrx Toolkit.',
      liveDemo: '',
      github: 'https://github.com/Shanushajahan707/Mean-Auth-App',
      type: 'Web Application',
    },
    {
      title: 'E-Commerce Platform',
      image: '/ecart.png',
      description:
        'A dynamic e-commerce site with OTP authentication and payment integration.',
      liveDemo: 'https://onlineecart.onrender.com',
      github: 'https://github.com/Shanushajahan707/Ecommerce-Ecart',
      type: 'Web Application',
    },
    {
      title: 'Weather App',
      image: '/weather_touch.png',
      description:
        'A real-time weather application using OpenWeather API and Angular.',
      liveDemo: 'https://weather-touch.vercel.app/login',
      github: 'https://github.com/Shanushajahan707/Weather-App-Frontend',
      type: 'Web Application',
    },
    {
      title: 'Netflix Clone',
      image: '/netflix_clone.png',
      description: 'A Netflix-like streaming platform built using Angular.',
      liveDemo: '',
      github: 'https://github.com/Shanushajahan707/Netflix-Clone-Angular',
      type: 'Web Application',
    },
    {
      title: 'Welfare Organization System',
      image: '/welfare_organization_mgnt.png',
      description: 'A management system for welfare organizations in Kerala.',
      liveDemo: '',
      github:
        'https://github.com/Shanushajahan707/Welfare_organization_management_system.git',
      type: 'Web Application',
    },
    {
      title: 'Expense Tracker',
      description:
        'A personal finance application for tracking expenses, organizing transactions, and getting a clearer view of spending.',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=70',
      technologies: [
        'Angular',
        'TypeScript',
        'Node.js',
        'MongoDB'
      ],
      liveDemo:
        'https://myexpenses1.vercel.app/',
      github:
        'https://github.com/avenuesbeautyhub/expenses',
      type: 'Web Application',
    },

    {
      title: 'Belles Rental Management',
      description:
        'A rental management system built for a retail business to manage rental items, bookings, availability, and customer rental workflows.',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=70',
      technologies: [
        'Angular',
        'Node.js',
        'TypeScript',
        'MongoDB'
      ],
      liveDemo:
        'https://belles-rental.vercel.app/',
      github:
        'https://github.com/Shanushajahan707/belles-rental',
      type: 'Web Application',
    }
  ];

  trackByProject(index: number, project: any): string {
    return project.title;
  }
}
