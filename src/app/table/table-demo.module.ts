import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSectionComponent } from './table-section';
import { TableDemoComponent } from './table-demo';
import { TableExampleComponent } from './examples/table';
import { TableTitleExampleComponent } from './examples/table-title';
import { CoreDemoModule } from '../core/core.module';
import { TableModule } from '@synergetic/core/tables';


@NgModule({
    imports: [
        TableModule,
        CommonModule,
        CoreDemoModule
    ],
    exports: [
        TableDemoComponent,
        TableSectionComponent,
        TableExampleComponent,
        TableTitleExampleComponent,
    ],
    declarations: [
        TableDemoComponent,
        TableSectionComponent,
        TableExampleComponent,
        TableTitleExampleComponent,
    ],
    providers: [],
})
export class TableDemoModule {
}
