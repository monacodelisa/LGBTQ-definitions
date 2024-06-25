import { Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  showScrollButton: boolean = false;

  @HostListener('window:scroll', [])
	onWindowScroll() {
		const yOffset = window.scrollY || document.documentElement.scrollTop;
		if (yOffset > 500) {
			this.showScrollButton = true;
		} else {
			this.showScrollButton = false;
		}
	}

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
