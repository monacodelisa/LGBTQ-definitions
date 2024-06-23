import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { SidebarModule } from 'primeng/sidebar';

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
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
}
