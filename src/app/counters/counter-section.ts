import {Component} from '@angular/core';


@Component({
    selector: 'counter-section',
    template: `
    <demo-section [name]="name"
                  [component]="component">
  
      <example-panel title="Counter (Unformatted)"
                     [component]="component"

                     demo="counter">
        <counter-example></counter-example>
      </example-panel>
      
      <example-panel title="Counter with Format Function"
                     [component]="component"
                     demo="counter-format">
        <counter-format-example></counter-format-example>
      </example-panel>
      
      <example-panel title="Counter using DecimalPipe (Built in)"
                     [component]="component"
                     demo="counter-pipe">
        <counter-pipe-example></counter-pipe-example>
      </example-panel>
      
      <example-panel title="Counter With Realtime Data"
                     [component]="component"
                     demo="counter-real">
        <counter-real-example></counter-real-example>
      </example-panel>
      
      <example-panel title="Counter any type of data"
                     [component]="component"
                     demo="counter-date">
        <counter-date-example></counter-date-example>
      </example-panel>
    
   </demo-section>
    `
})

export class CounterSectionComponent {
    public name: string = 'Counter';
    public component: string = 'counters';
}
