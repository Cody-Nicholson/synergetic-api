import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'table-title-example',
    templateUrl: 'table-title.html'
})
export class TableTitleExampleComponent {

    dataRows: any[] = [
        {
            id: 1,
            name: 'Fox News',
            clicks: 23,
        }, {
            id: 2,
            name: 'Fox Business',
            clicks: 45,
        } , {
            id: 3,
            name: 'CNN Money',
            clicks: 57,
        }
    ];

    total: number = this.dataRows.reduce((prev, current, i) => {
        return prev + current.clicks;
    }, 0);

}

