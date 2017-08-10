import {AfterViewInit, Component, Inject, Renderer} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';


@Component({
    selector: 'top-menu',
    templateUrl: 'top-menu.component.html',
})
export class TopMenuComponent implements AfterViewInit {
    public isShown: boolean = false;

    private renderer: Renderer;
    private document: any;

    public constructor(renderer: Renderer,
                       @Inject(DOCUMENT) document: any,
                       private router: Router) {
        this.renderer = renderer;
        this.document = document;
    }

    public ngAfterViewInit(): any {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
            }
        });
    }

}