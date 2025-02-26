import { Component } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  standalone: false,
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.css'
})
export class MyprojectsComponent {
   projects = [
    {
        title: "Live Streaming Platform",
        image: "capturelive.png",
        description: "A one-to-many live streaming platform using WebRTC, Angular 17, and Node.js.",
        liveDemo: "https://capturelive-shanushajahan707s-projects.vercel.app/",
        github: "https://github.com/Shanushajahan707/Live-Stream-Frontend"
    },
    {
        title: "MEAN Auth App",
        image: "meanauth.png",
        description: "A secure authentication system with JWT, Angular Router, and Ngrx Toolkit.",
        liveDemo: "",
        github: "https://github.com/Shanushajahan707/Mean-Auth-App"
    },
    {
        title: "E-Commerce Platform",
        image: "ecart.png",
        description: "A dynamic e-commerce site with OTP authentication and payment integration.",
        liveDemo: "https://onlineecart.onrender.com",
        github: "https://github.com/Shanushajahan707/Ecommerce-Ecart"
    },
    {
        title: "Weather App",
        image: "weather_touch.png",
        description: "A real-time weather application using OpenWeather API and Angular.",
        liveDemo: "https://weathertouch-shanushajahan707s-projects.vercel.app/",
        github: "https://github.com/Shanushajahan707/Weather-App-Frontend"
    },
    {
        title: "Netflix Clone",
        image: "netflix_clone.png",
        description: "A Netflix-like streaming platform built using Angular.",
        liveDemo: "",
        github: "https://github.com/Shanushajahan707/Netflix-Clone-Angular"
    },
    {
        title: "Welfare Organization System",
        image: "welfare_organization_mgnt.png",
        description: "A management system for welfare organizations in Kerala.",
        liveDemo: "",
        github: "https://github.com/Shanushajahan707/Welfare_organization_management_system.git"
    }
];
}
