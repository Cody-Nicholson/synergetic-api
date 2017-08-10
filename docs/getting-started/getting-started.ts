import {Component, ElementRef} from '@angular/core';
import {Http} from '@angular/http';


@Component({
    selector: 'accordion-section',
    templateUrl: './getting-started.template.html'
})
export class GettingStartedSectionComponent {
    public name: string = `Synergetic Components`;
    public desc: string;
    public dependencies: string;
    public installation: string;
    public readingDocumentation: string;

    constructor(private http: Http,
                private elementRef: ElementRef) {
    }

    ngOnInit(){
        this.setDocs();
    }

    setDocs(){
        this.http.get(`getting-started/dependencies.md`)
            .subscribe(response => {
                this.dependencies = response.text();
            });

        this.http.get(`getting-started/installation.md`)
            .subscribe(response => {
                this.installation = response.text();
            });

        this.http.get(`getting-started/reading-documentation.md`)
            .subscribe(response => {
                this.readingDocumentation = response.text();
            });
    }
}
