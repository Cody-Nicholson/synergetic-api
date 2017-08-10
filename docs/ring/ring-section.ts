import {Component} from '@angular/core';

@Component({
    selector: 'pie-ring-section',
    template: `
    <demo-section [name]="name"
                  [component]="component">
                  
      <example-panel title="Basic Rings"
                     component="ring"
                     demo="ring">
             <ring-example></ring-example>

      </example-panel>
      
      <example-panel title="Ring with realtime updates"
                     component="ring"
                     demo="realtime">
             <ring-realtime-example></ring-realtime-example>

      </example-panel>
      
    </demo-section>`
})

export class RingsSectionComponent {
    public name: string = 'Rings';
    public component: string = 'ring';
}
