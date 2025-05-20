import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'buildwithme';
  
ngOnInit() {
  const cursor = document.getElementById('custom-cursor');

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  const speed = 0.1; // Lower = slower

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    if (cursor) {
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
    }

    requestAnimationFrame(animate);
  }

  animate();
}



}
