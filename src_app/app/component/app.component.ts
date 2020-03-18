import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'sp-app-root',
    styles: [`
        :host > div {
            width: 100%;
            height: 100%;
        }
    `],
    template: `
        <div>
            <router-outlet></router-outlet>
        </div>`
})
export class AppComponent {
    
}
