import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';


@Component({
    selector: 'parallel-bars-realtime-example',
    templateUrl: 'realtime.html'
})
export class ParallelBarsRealtimeExampleComponent {
    bars: number[] = [5, 4, 5, 6];

    constructor() {
        Observable
            .interval(6000)
            .take(100)
            .subscribe(x => {
                this.bars.forEach((bar, i) => {
                    this.bars[i] = Math.random();
                });
            });
    }

    get total(): number {
        return this.bars.reduce((a, b) => a + b, 0)
    }

    trackByIndex(index) {
        return index;
    }
}
