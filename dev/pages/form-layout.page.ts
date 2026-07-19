import { Component, signal } from "@angular/core";
import {
  Sh3ChoiceRowComponent,
  Sh3IconComponent,
  Sh3InputComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
  Sh3TabNavComponent,
  type Sh3ChoiceOption,
  type Sh3TabNavItem,
} from "../../src/index";

/** `/form-layout` — a settings-style form driven by a vertical tab-nav. */
@Component({
  selector: "gal-form-layout-page",
  standalone: true,
  imports: [
    Sh3PageLayoutComponent,
    Sh3PageSectionComponent,
    Sh3TabNavComponent,
    Sh3InputComponent,
    Sh3ChoiceRowComponent,
    Sh3IconComponent,
  ],
  templateUrl: "./form-layout.page.html",
})
export default class FormLayoutPage {
  protected readonly formTabs: Sh3TabNavItem[] = [
    { key: "profile", label: "Profile" },
    { key: "account", label: "Account" },
    { key: "notifications", label: "Notifications", badge: 2 },
  ];
  protected readonly formTab = signal("profile");

  protected readonly fName = signal("Clément Aubry");
  protected readonly fEmail = signal("clement@sh3pherd.dev");
  protected readonly fRole = signal("manager");
  protected readonly fBio = signal("");
  protected readonly fUsername = signal("caubry");
  protected readonly fLang = signal("fr");
  protected readonly fTwoFactor = signal("off");
  protected readonly fDigest = signal("daily");
  protected readonly fPush = signal("on");

  protected readonly roleOptions: Sh3ChoiceOption[] = [
    { key: "manager", label: "Manager" },
    { key: "member", label: "Member" },
    { key: "guest", label: "Guest" },
  ];
  protected readonly onOff: Sh3ChoiceOption[] = [
    { key: "off", label: "Off" },
    { key: "on", label: "On" },
  ];
  protected readonly digestOptions: Sh3ChoiceOption[] = [
    { key: "off", label: "Off" },
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
  ];

  protected readonly formSaved = signal(false);
  protected saveForm(): void {
    this.formSaved.set(true);
    setTimeout(() => this.formSaved.set(false), 1500);
  }
}
