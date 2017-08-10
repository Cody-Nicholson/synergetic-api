import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routes } from '../router.config';


@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html'
})

export class MainMenuComponent {
  public routes:any = routes;
  public hash:string = '';

  public constructor(private router:Router) {
    this.routes = this.routes.filter((v:any) => v.path !== '**');
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.hash = event.url;
      }
    });
  }
}
