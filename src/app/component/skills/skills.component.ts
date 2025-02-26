import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

import AOS from 'aos';


@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  
    @ViewChild('skillsSection') skillsSection!: ElementRef;

    ngOnInit() {
      AOS.init();
    }
    constructor(private cdr: ChangeDetectorRef) {}

     skills = [
      { label: 'Languages', percentage: 90, technologies: 'JavaScript, TypeScript, HTML, CSS, PHP, C, C++, Java', animated: false },
      { label: 'Frameworks & Libraries', percentage: 90, technologies: 'Angular, Node.js, Express, Laravel, Tailwind CSS', animated: false },
      { label: 'Databases', percentage: 80, technologies: 'MongoDB, MySQL', animated: false },
      { label: 'DevOps & Tools', percentage: 80, technologies: 'Git, GitHub, Render, Vercel, AWS (Basic), Android Studio', animated: false },
      { label: 'Concepts', percentage: 75, technologies: 'WebRTC, Clean Architecture, MVC Architecture, Repository Pattern, WebSocket', animated: false },
      { label: 'Design', percentage: 70, technologies: 'Figma (Intermediate)', animated: false },
      { label: 'Used Technologies', percentage: 70, technologies: 'React (Intermediate)', animated: false }
    ];
    

    
    ngAfterViewInit(): void {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            this.skills.forEach(skill => skill.animated = true);
            this.cdr.detectChanges(); // Force Angular to update UI
          }, 300); // Small delay to ensure smooth transition
          observer.disconnect(); // Ensure the animation runs only once
        }
      }, { threshold: 0.2 }); // Trigger when 50% of the section is visible
    
      observer.observe(this.skillsSection.nativeElement);
    }
    
}
