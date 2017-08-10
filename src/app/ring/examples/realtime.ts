import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
    selector: 'ring-realtime-example',
    templateUrl: 'realtime.html'
})
export class RingRealtimeExampleComponent {
    value: number;
    title: string;

    constructor() {
        Observable
            .interval(3000)
            .take(1000)
            .subscribe(x => {
                this.value = Math.random();
            });

        this.value = .77;
    }
}

