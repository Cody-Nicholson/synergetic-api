import {Component} from '@angular/core';


@Component({
    selector: 'table-section',
    template: `
    <demo-section [name]="name"
                  component="tables">
      <example-panel title="Basic Table"
                     component="table"
                     demo="table">
             <table-example></table-example>

      </example-panel>
      
      <example-panel title="Table with Title Row"
                     component="table"
                     demo="table-title">
             <table-title-example></table-title-example>

      </example-panel>
    </demo-section>`
})
export class TableSectionComponent {
    public name: string = 'Table';
}
