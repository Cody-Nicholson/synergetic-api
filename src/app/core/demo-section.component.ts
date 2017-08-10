import {Component, Input, ElementRef} from '@angular/core';
import {Http} from '@angular/http';


@Component({
    selector: 'demo-section',
    templateUrl: './demo-section.component.html',
})
export class DemoSectionComponent {

    @Input() public name: string;
    @Input() public component: string;
    @Input() public base: string = 'core';
    @Input() public src: string = '';

    readme: string;
    title: string;

    constructor(private http: Http,
                private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.setReadme();
        this.setTitle();
    }

    setReadme() {
        this.http.get(`${this.base}/${this.component || this.name.toLowerCase()}/readme.md`)
            .subscribe(response => {
                this.readme = response.text();
            });
    }

    setTitle() {
        this.http.get(`${this.base}/${this.component || this.name.toLowerCase()}/title.md`)
            .subscribe(response => {
                this.title = response.text();
            });
    }

}
