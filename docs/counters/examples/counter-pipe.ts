import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'counter-pipe-example',
    templateUrl: 'counter-pipe.html'
})
export class CounterPipeExampleComponent {
    clicks: number = 3453;
    value: string;
}

