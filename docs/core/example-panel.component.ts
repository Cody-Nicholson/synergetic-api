import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {HighlightJsService} from 'angular2-highlight-js';


@Component({
    selector: 'example-panel',
    templateUrl: 'example-panel.component.html',
})
export class ExamplePanelComponent implements OnInit {

    @Input() title: string;
    @Input() component: string;
    @Input() demo: string;
    @Input() example: string;

    @ViewChild('htmlEle') htmlEle: ElementRef;

    html: any;
    ts: string;
    showSource: boolean;


    constructor(private http: Http,
                private highlight: HighlightJsService) {
    }

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.getHtmlDoc();
        this.getTsDoc();
    }

    get exampleHtmlUrl(): string {
        return `./${this.component}/examples/${this.demo || this.component}.html`;
    }

    get exampleTsUrl(): string {
        return `./${this.component}/examples/${this.demo || this.component}.ts`;
    }

    getHtmlDoc() {
        this.http.get(this.exampleHtmlUrl)
            .subscribe(response => {
                this.html = response.text().trim();
                setTimeout(_ => {
                    this.highlight.highlight(this.htmlEle.nativeElement)
                }, 0);
            });
    }

    getTsDoc() {
        this.http.get(this.exampleTsUrl)
            .subscribe(response => {
                this.ts = `
                    <pre><code class="highlight typescript">${response.text()}</code></pre>
                `;
            });
    }
}