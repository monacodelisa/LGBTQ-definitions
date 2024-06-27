import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { SidebarModule } from 'primeng/sidebar';
import { RouterLink } from "@angular/router";
import { ThemeService } from "../../services/theme.service";
import { DataService } from "../../services/data.service";

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
  searchTerm: string = "";
  themeService = inject(ThemeService);
  dataService = inject(DataService);

  onThemeChange(theme: string): void {
		this.selectedTheme = theme;
		this.themeService.setTheme(theme);
	}

  onSearchTermChange(term: string): void {
    this.dataService.setSearchTerm(term);
  }
}
