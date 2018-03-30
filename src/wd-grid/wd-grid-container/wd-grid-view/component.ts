import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'wd-grid-view',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class WDGridViewComponent extends OnInit {
    data: any = {}
    constructor() {
        super();
        this.data.dataList = [];
    }

    ngOnInit() {

    }
}