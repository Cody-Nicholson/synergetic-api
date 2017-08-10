import {Component} from '@angular/core';

@Component({
    selector: 'parallel-bars-section',
    template: `
    <demo-section [name]="name"
                  [component]="component">
                  
     <example-panel title="Basic"
                     [component]="component"
                     demo="basic">
             <parallel-bars-example></parallel-bars-example>

      </example-panel>
      
      <example-panel title="Bars with realtime updates"
                     [component]="component"
                     demo="realtime">
             <parallel-bars-realtime-example></parallel-bars-realtime-example>

      </example-panel>
      
    </demo-section>`
})

export class ParallelBarsSectionComponent {
    public name: string = 'Parallel Bars';
    public component: string = 'parallel-bars';
}
