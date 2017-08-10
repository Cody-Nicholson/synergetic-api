import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'value-list-example',
    templateUrl: 'value-list.html'
})
export class ValueListExampleComponent {

    form: FormGroup;

    constructor(protected builder: FormBuilder){
        this.form = this.builder.group({
            names: [['John', 'James', 'Luke']],
        });
    }
}