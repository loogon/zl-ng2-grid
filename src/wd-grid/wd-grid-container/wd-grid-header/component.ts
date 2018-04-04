import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'wd-grid-header',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class WDGridHeaderComponent extends OnInit {
    @Input()
    gridHeader: any;
    
    constructor() {
        super();
    }

    ngOnInit() {

    }
}