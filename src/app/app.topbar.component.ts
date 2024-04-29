import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { ConfigService } from './service/app.config.service';
import { AppConfig } from './api/appconfig';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];

    config: AppConfig;

    light = true;

    profile = false;

    constructor(public appMain: AppMainComponent, public configService: ConfigService,) { }

    changeTheme(theme: string, dark: boolean) {
        let themeElement = document.getElementById('theme-css');
        themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
        this.configService.updateConfig({ ...this.config, ...{ theme, dark } });
        this.light = !this.light
    }

    activedProfile() {
        this.profile = true
    }
}
