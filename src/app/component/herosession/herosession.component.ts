import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-herosession',
  standalone: false,
  templateUrl: './herosession.component.html',
  styleUrl: './herosession.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosessionComponent {
  pdflocation:string="Resume.pdf"
}
