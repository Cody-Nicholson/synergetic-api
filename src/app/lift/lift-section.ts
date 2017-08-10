import {Component} from '@angular/core';

@Component({
    selector: 'lift-section',
    template: `
    <demo-section [name]="name"
                  [component]="component">
                  
      <example-panel title="Basic"
                     [component]="component"
                     demo="lift">
             <lift-example></lift-example>

      </example-panel>
      
      <example-panel title="Lift with realtime updates"
                     [component]="component"
                     demo="realtime">
             <lift-realtime-example></lift-realtime-example>

      </example-panel>
      
    </demo-section>`
})

export class LiftSectionComponent {
    public name: string = 'Lift';
    public component: string = 'lift';
}
