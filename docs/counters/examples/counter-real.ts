import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';


@Component({
    selector: 'counter-real-example',
    templateUrl: 'counter-real.html'
})
export class CounterRealtimeExampleComponent {
    clicks: number;
    val: string;

    constructor() {
        this.clicks = 232;

        Observable
            .interval(8000)
            .take(10)
            .subscribe(x => {
                this.clicks = (x + 1) * Math.random() * 200 + 200;
            });
    }

    format(num) {
        return num.toFixed(0);
    }

}

