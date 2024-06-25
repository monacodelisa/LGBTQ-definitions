import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { SidebarModule } from 'primeng/sidebar';
import { RouterLink } from "@angular/router";
import { ThemeService } from "../../services/theme.service";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
    RouterLink,
		FormsModule,
		ToolbarModule,
		ButtonModule,
		InputSwitchModule,
		InputTextModule,
    SidebarModule
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	checked = true;
  sidebarVisible: boolean = false;
  selectedTheme: string = "dark";
  themeService = inject(ThemeService);

  onThemeChange(theme: string): void {
		this.selectedTheme = theme;
		this.themeService.setTheme(theme);
	}
}
