import {Component} from '@angular/core';


@Component({
    selector: 'counter-format-example',
    templateUrl: 'counter-format.html'
})
export class CounterFormatExampleComponent {
    data: any = {
        clicks: 456,
    };
    displayValue: number = 0;

    setDisplay(count) {
        this.displayValue = count.toFixed(0);
    }

    format(num) {
        return num.toFixed(0);
    }

}

