import {Component, AfterContentInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'demo-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements AfterContentInit {

    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef, private router: Router) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }

    public ngAfterContentInit(): any {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (typeof PR !== 'undefined') {
                    // google code-prettify
                //    setTimeout(PR.prettyPrint, 50);
                }
            }
        });
    }
}
