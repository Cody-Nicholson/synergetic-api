import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';


@Component({
    selector: 'lift-realtime-example',
    templateUrl: 'realtime.html'
})
export class LiftRealtimeExampleComponent {
    value: number = 10;
    bench: number = 7;

    constructor() {
        
        Observable
            .interval(6000)
            .take(100)
            .subscribe(x => {
                this.value = Math.random() * 100;
                this.bench = Math.random() * 100;
            });

    }
}
