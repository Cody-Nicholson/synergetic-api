import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {DemoPanelComponent} from './demo-panel.component';
import {DemoSectionComponent} from './demo-section.component';
import {ExamplePanelComponent} from './example-panel.component';
import {SidebarDemoPanelComponent} from './sidebar-demo-panel.component';
import {MarkdownToHtmlPipe} from './markdown.pipe';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {HighlightJsModule, HighlightJsService} from 'angular2-highlight-js';


@NgModule({
    imports: [
        CommonModule,
        TabsModule,
        HighlightJsModule
    ],
    exports: [
        DemoPanelComponent,
        DemoSectionComponent,
        ExamplePanelComponent,
        SidebarDemoPanelComponent,
        MarkdownToHtmlPipe,
    ],
    declarations: [
        DemoPanelComponent,
        DemoSectionComponent,
        ExamplePanelComponent,
        SidebarDemoPanelComponent,
        MarkdownToHtmlPipe,
        SidebarDemoPanelComponent,
    ],
    providers: [
        HighlightJsService
    ],
})
export class CoreDemoModule {
}
