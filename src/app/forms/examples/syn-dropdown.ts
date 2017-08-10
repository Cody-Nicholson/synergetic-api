import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'syn-dropdown-example',
    templateUrl: 'syn-dropdown.html'
})
export class SynDropdownExampleComponent {

    form: FormGroup;
    names: string[] = ['John', 'James', 'Peter', 'Paul'];
    selectedLabel: string;

    constructor(protected builder: FormBuilder){
        this.form = this.builder.group({
            firstName: ['', Validators.required],
        });
    }

    selectItem(item: any){
        this.selectedLabel = item.label;
    }
}
