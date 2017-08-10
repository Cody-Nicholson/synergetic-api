import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'radio-example',
    templateUrl: 'radio.html'
})
export class RadioExampleComponent {

    form: FormGroup;

    constructor(protected builder: FormBuilder){
        this.form = this.builder.group({
            position: ['', Validators.required],
        });
    }
}