import {RouterModule, Routes} from '@angular/router';
import {GettingStartedSectionComponent} from './getting-started/getting-started';
import {TableSectionComponent} from './table/table-section';
import {CounterSectionComponent} from './counters/counter-section';
import {BulletSectionComponent} from './bullet/bullet-section';
import {RingsSectionComponent} from './ring/ring-section';
import {FormsSectionComponent} from './forms/forms-section';
import {LiftSectionComponent} from './lift/lift-section';
import {ParallelBarsSectionComponent} from './parallel-bars/parallel-bars-section';


export const routes: Routes = [
    {
        path: '',
        data: ['Getting started'],
        component: GettingStartedSectionComponent
    },
     {
        path: 'table',
        data: ['Table'],
        component: TableSectionComponent
    }, 
    {
        path: 'counters',
        data: ['Counters'],
        component: CounterSectionComponent
    },
    {
        path: 'bullet',
        data: ['Bullet'],
        component: BulletSectionComponent,
    },
    {
        path: 'ring',
        data: ['Rings'],
        component: RingsSectionComponent,
    },
    {
        path: 'lift',
        data: ['Lift'],
        component: LiftSectionComponent,
    },
    {
        path: 'parallel-bars',
        data: ['Parallel Bars'],
        component: ParallelBarsSectionComponent,
    },
  
    {
        path: 'forms',
        data: ['Forms'],
        component: FormsSectionComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    },
     /*  {
        path: 'sidebar',
        data: ['Sidebar'],
        component: SidebarSectionComponent,
    }, */
     /*  {
        path: 'sunburst',
        data: ['Sunburst'],
        component: SunburstSectionComponent,
    }, */
];

export const demoRouting = RouterModule.forRoot(routes);
