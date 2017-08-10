import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GettingStartedSectionComponent } from './getting-started/getting-started';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoreDemoModule } from './core/core.module';
import { CounterExampleComponent } from './counters/examples/counter';
import { CounterRealtimeExampleComponent } from './counters/examples/counter-real';
import { CounterDateExampleComponent } from './counters/examples/counter-date';
import { CounterPipeExampleComponent } from './counters/examples/counter-pipe';
import { CounterFormatExampleComponent } from './counters/examples/counter-format';
import { InputExampleComponent } from './forms/examples/input';
import { SynDropdownExampleComponent } from './forms/examples/syn-dropdown';
import { RadioExampleComponent } from './forms/examples/radio';
import { CheckboxExampleComponent } from './forms/examples/checkbox';
import { CheckboxListDemoComponent } from './forms/examples/checkbox-list';
import { CounterSectionComponent } from './counters/counter-section';
import { BulletSectionComponent } from './bullet/bullet-section';
import { RingsSectionComponent } from './ring/ring-section';
import { FormsSectionComponent } from './forms/forms-section';
import { ValueListExampleComponent } from './forms/examples/value-list';
import { TableDemoModule } from './table/table-demo.module';
import { BulletExampleComponent } from './bullet/examples/basic';
import { BulletRealtimeExampleComponent } from './bullet/examples/realtime';
import { RingRealtimeExampleComponent } from './ring/examples/realtime';
import { RingExampleComponent } from './ring/examples/ring';
import { LiftExampleComponent } from './lift/examples/lift';
import { LiftRealtimeExampleComponent } from './lift/examples/realtime';
import { LiftSectionComponent } from './lift/lift-section';
import { demoRouting } from './router.config';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {
    CounterModule,
    BulletModule,
    RingModule,
    LiftModule,
    SynFormsModule,
    ParallelBarsModule
} from '@synergetic/core';
import { ParallelBarsSectionComponent } from './parallel-bars/parallel-bars-section';
import { ParallelBarsExampleComponent } from './parallel-bars/examples/basic';
import { ParallelBarsRealtimeExampleComponent } from './parallel-bars/examples/realtime';

export const exampleComponents = [
    CounterExampleComponent,
    CounterRealtimeExampleComponent,
    CounterPipeExampleComponent,
    CounterFormatExampleComponent,
    CounterDateExampleComponent,
    InputExampleComponent,
    SynDropdownExampleComponent,
    RadioExampleComponent,
    CheckboxExampleComponent,
    CheckboxListDemoComponent,
    BulletSectionComponent,
    RingsSectionComponent,
    FormsSectionComponent,
    CounterSectionComponent,
    ValueListExampleComponent,
    BulletExampleComponent,
    BulletRealtimeExampleComponent,
    RingRealtimeExampleComponent,
    RingExampleComponent,
    LiftExampleComponent,
    LiftRealtimeExampleComponent,
    ParallelBarsExampleComponent,
    ParallelBarsRealtimeExampleComponent,
];

export const sectionComponents = [
    BulletSectionComponent,
    RingsSectionComponent,
    FormsSectionComponent,
    CounterSectionComponent,
    LiftSectionComponent,
    ParallelBarsSectionComponent
];


@NgModule({
    declarations: [
        AppComponent,
        ...exampleComponents,
        ...sectionComponents,
        GettingStartedSectionComponent,
        MainMenuComponent,
        TopMenuComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CoreDemoModule,
        ReactiveFormsModule,
        HttpModule,
        TabsModule.forRoot(),
        TableDemoModule,
        demoRouting,
        CounterModule,
        BulletModule,
        RingModule,
        LiftModule,
        SynFormsModule,
        ParallelBarsModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}