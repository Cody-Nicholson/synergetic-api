import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'table-example',
    templateUrl: 'table.html'
})
export class TableExampleComponent {

    dataRows: any[] = [
        {
            id: 1,
            name: 'Fox News',
            timezone: 'EST',
        }, {
            id: 2,
            name: 'Fox Business',
            timezone: 'CST',
        } , {
            id: 3,
            name: 'CNN Money',
            timezone: 'CST',
        }
    ];

}

