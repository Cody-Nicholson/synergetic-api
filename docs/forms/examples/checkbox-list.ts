import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'checkbox-list-example',
    templateUrl: 'checkbox-list.html'
})
export class CheckboxListDemoComponent {

    form: FormGroup;
    permissionItems: any[];

    constructor(protected builder: FormBuilder) {

        this.permissionItems = [
            {
                id: 1,
                label: 'Fox News',
            }, {
                id: 2,
                label: 'CNN',
            }, {
                id: 3,
                label: 'Top Publisher',
            }
        ];

        this.form = this.builder.group({
            permissions: [[]],
        });
    }
}