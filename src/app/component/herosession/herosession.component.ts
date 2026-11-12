import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-herosession',
  standalone: false,
  templateUrl: './herosession.component.html',
  styleUrl: './herosession.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosessionComponent {
  // Google Drive resume — direct-download endpoint so the CV downloads immediately
  pdflocation =
    'https://drive.google.com/uc?export=download&id=1wpDiUympcofGGL97KuIFTMwAqFSJzCSt';
}
