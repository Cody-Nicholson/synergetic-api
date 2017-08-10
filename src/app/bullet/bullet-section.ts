import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'bullet-section',
    template: `
    <demo-section [name]="name">
      <example-panel title="Basic Bullets"
                   component="bullet"
                   demo="basic">
        <bullet-example></bullet-example>
      </example-panel>

    <example-panel title="Bullet with realtime updates"
                   component="bullet"
                   demo="realtime">
        <bullet-realtime-example></bullet-realtime-example>
      </example-panel>


    </demo-section>`
})

export class BulletSectionComponent {
    public name: string = 'Bullet';

    constructor(public http: Http) {

    }
}
