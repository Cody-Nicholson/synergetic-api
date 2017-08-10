import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'checkbox-example',
    templateUrl: 'checkbox.html'
})
export class CheckboxExampleComponent {

    form: FormGroup;

    constructor(protected builder: FormBuilder){
        this.form = this.builder.group({
            tracking: ['', Validators.required],
        });
    }
}