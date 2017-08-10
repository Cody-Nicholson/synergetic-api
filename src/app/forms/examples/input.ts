import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'input-example',
    templateUrl: 'input.html',
})

export class InputExampleComponent {

    form: FormGroup;

    constructor(protected builder: FormBuilder){
        this.form = this.builder.group({
            firstName: ['', Validators.required],
        });
    }
}