import {Component} from '@angular/core';


@Component({
    selector: 'forms-section',
    template: `
    <demo-section [name]="name">
  
      <example-panel title="Input"
                     [component]="component"
                     demo="input">
        <input-example></input-example>
      </example-panel>
      
      <example-panel title="Radios"
                     [component]="component"
                     demo="radio">
        <radio-example></radio-example>
      </example-panel>
      
      <example-panel title="Checkbox"
                     [component]="component"
                     demo="checkbox">
        <checkbox-example></checkbox-example>
      </example-panel>
      
      <example-panel title="Checkbox List"
                     [component]="component"
                     demo="checkbox-list">
        <checkbox-list-example></checkbox-list-example>
      </example-panel>
      
      <example-panel title="Field with Synergetic Dropdown"
                     [component]="component"
                     demo="syn-dropdown">
        <syn-dropdown-example></syn-dropdown-example>
      </example-panel>
      
      <example-panel title="Value List"
                     [component]="component"
                     demo="value-list">
        <value-list-example></value-list-example>
      </example-panel>
    
    </demo-section>`
})

export class FormsSectionComponent {
    name: string = 'Forms';
    component: string = 'forms';
}
