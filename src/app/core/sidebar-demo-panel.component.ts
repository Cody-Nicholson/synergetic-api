import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'sidebar-demo-panel',
    template: `
    <demo-panel [title]="title">
        <div class="layout-body">
          <div class="layout-main">
              <ng-content></ng-content>
              <div class="layout-content">
              </div>
          </div>
        </div>    
       
    </demo-panel>
    `,
    styles: [
        `
        .layout-body{
            display: flex;
            flex-direction: column;
        }
        
        .layout-main{
            display: flex;
            flex: 1;
        }
        
        .layout-content{
            flex: 1;
            background-color: #f2f1f1;
        }
    `
    ],
})
export class SidebarDemoPanelComponent implements OnInit {

    @Input() title: string;

    constructor() {
    }

    ngOnInit() {
    }
}