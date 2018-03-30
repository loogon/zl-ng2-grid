import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'wd-grid-header',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class WDGridHeaderComponent extends OnInit {
    header: any = {};
    constructor() {
        super();
        this.header.columnList = [];
    }

    ngOnInit() {

    }
}