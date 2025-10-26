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
      // Option 1: Start animation immediately (current implementation)
      setTimeout(() => {
        this.skills.forEach(skill => skill.animated = true);
        this.cdr.detectChanges();
      }, 500);

   

      // Intersection observer as fallback
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.skills.forEach(skill => skill.animated = true);
          this.cdr.detectChanges();
          observer.disconnect();
        }
      }, { threshold: 0.2 });

      observer.observe(this.skillsSection.nativeElement);
    }

    // Helper methods for enhanced functionality
    trackBySkill(index: number, skill: any): string {
      return skill.label;
    }

    getTechnologies(technologies: string): string[] {
      return technologies.split(',').map(tech => tech.trim());
    }

    getSkillLevel(percentage: number): string {
      if (percentage >= 90) return 'Expert';
      if (percentage >= 75) return 'Advanced';
      if (percentage >= 60) return 'Intermediate';
      if (percentage >= 40) return 'Beginner';
      return 'Learning';
    }

    getSkillLevelClass(percentage: number): string {
      if (percentage >= 90) return 'bg-green-400/20 text-green-400 border-green-400/30';
      if (percentage >= 75) return 'bg-blue-400/20 text-blue-400 border-blue-400/30';
      if (percentage >= 60) return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      if (percentage >= 40) return 'bg-orange-400/20 text-orange-400 border-orange-400/30';
      return 'bg-red-400/20 text-red-400 border-red-400/30';
    }

    getTotalSkills(): number {
      return this.skills.length;
    }

    getTotalTechnologies(): number {
      return this.skills.reduce((total, skill) => {
        return total + this.getTechnologies(skill.technologies).length;
      }, 0);
    }

    getAveragePercentage(): number {
      const total = this.skills.reduce((sum, skill) => sum + skill.percentage, 0);
      return Math.round(total / this.skills.length);
    }

    getYearsExperience(): number {
      // Assuming development started around 2020-2021 based on the projects
      const currentYear = new Date().getFullYear();
      const startYear = 2023; 
      return currentYear - startYear;
    }

}    
