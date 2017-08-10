import {Component} from '@angular/core';


@Component({
    selector: 'table-demo',
    templateUrl: 'table-demo.html'
})
export class TableDemoComponent {

    dataRows: any[] = [
        {
            id: 1,
            name: 'Fox News',
            timezone: 'EST',
        }, {
            id: 2,
            name: 'Fox Business',
            timezone: 'CST',
        }, {
            id: 3,
            name: 'CNN Money',
            timezone: 'CST',
        }
    ];

}
