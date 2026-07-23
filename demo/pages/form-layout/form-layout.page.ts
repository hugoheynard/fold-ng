import { Component, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldTabLayoutComponent,
  FoldChoiceRowComponent,
  FoldIconComponent,
  FoldInputComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldTabNavComponent,
  type FoldChoiceOption,
  type FoldTabNavItem,
} from "../../../src/public-api";

/** `/form-layout` — a settings-style form driven by a vertical tab-nav. */
@Component({
  selector: "gal-form-layout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldTabLayoutComponent,
    FoldPageSectionComponent,
    FoldTabNavComponent,
    FoldInputComponent,
    FoldChoiceRowComponent,
    FoldIconComponent,
  ],
  templateUrl: "./form-layout.page.html",
  styleUrl: "./form-layout.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class FormLayoutPage {
  protected readonly formTabs: FoldTabNavItem[] = [
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

  protected readonly roleOptions: FoldChoiceOption[] = [
    { key: "manager", label: "Manager" },
    { key: "member", label: "Member" },
    { key: "guest", label: "Guest" },
  ];
  protected readonly onOff: FoldChoiceOption[] = [
    { key: "off", label: "Off" },
    { key: "on", label: "On" },
  ];
  protected readonly digestOptions: FoldChoiceOption[] = [
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
