import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
