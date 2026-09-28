import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements AfterViewInit {

  @ViewChild('skillsSection') skillsSection!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  skills = [
    {
      label: 'Languages',
      percentage: 90,
      technologies:
        'JavaScript, TypeScript, HTML, CSS, PHP, C, C++, Java',
      animated: false,
      technologiesArray: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'C', 'C++', 'Java'],
      level: 'Expert'
    },

    {
      label: 'Frameworks & Libraries',
      percentage: 90,
      technologies:
        'Angular, Node.js, Express, Laravel, Tailwind CSS',
      animated: false,
      technologiesArray: ['Angular', 'Node.js', 'Express', 'Laravel', 'Tailwind CSS'],
      level: 'Expert'
    },

    {
      label: 'Databases',
      percentage: 80,
      technologies:
        'MongoDB, MySQL',
      animated: false,
      technologiesArray: ['MongoDB', 'MySQL'],
      level: 'Advanced'
    },

    {
      label: 'Cloud & Storage',
      percentage: 75,
      technologies:
        'Cloudinary, MinIO, MongoDB Atlas',
      animated: false,
      technologiesArray: ['Cloudinary', 'MinIO', 'MongoDB Atlas'],
      level: 'Advanced'
    },

    {
      label: 'DevOps & Tools',
      percentage: 80,
      technologies:
        'Git, GitHub, Render, Vercel, AWS (Basic), Docker, Android Studio',
      animated: false,
      technologiesArray: ['Git', 'GitHub', 'Render', 'Vercel', 'AWS (Basic)', 'Docker', 'Android Studio'],
      level: 'Advanced'
    },

    {
      label: 'Architecture & Concepts',
      percentage: 75,
      technologies:
        'WebRTC, Clean Architecture, MVC, Repository Pattern, WebSocket',
      animated: false,
      technologiesArray: ['WebRTC', 'Clean Architecture', 'MVC', 'Repository Pattern', 'WebSocket'],
      level: 'Advanced'
    },

    {
      label: 'Design',
      percentage: 70,
      technologies:
        'Figma (Intermediate)',
      animated: false,
      technologiesArray: ['Figma (Intermediate)'],
      level: 'Advanced'
    },

    {
      label: 'Additional Technologies',
      percentage: 70,
      technologies:
        'React (Intermediate)',
      animated: false,
      technologiesArray: ['React (Intermediate)'],
      level: 'Advanced'
    }
  ];

  // Cache computed values to avoid repeated calculations
  private _totalSkills = this.skills.length;
  private _totalTechnologies = this.skills.reduce((total, skill) => total + skill.technologiesArray.length, 0);
  private _averagePercentage = Math.round(this.skills.reduce((sum, skill) => sum + skill.percentage, 0) / this.skills.length);
  private _yearsExperience = new Date().getFullYear() - 2023;



  ngAfterViewInit(): void {
    // Intersection observer to trigger animations when section is visible
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
    return this._totalSkills;
  }

  getTotalTechnologies(): number {
    return this._totalTechnologies;
  }

  getAveragePercentage(): number {
    return this._averagePercentage;
  }

  getYearsExperience(): number {
    return this._yearsExperience;
  }

}    
