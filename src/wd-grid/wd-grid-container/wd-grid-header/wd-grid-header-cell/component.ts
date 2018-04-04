import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'wd-grid-header-cell',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class WDGridHeaderCellComponent extends OnInit {
    @Input()
    gridHeaderCell: any;

    constructor() {
        super();
    }

    ngOnInit() {
        
    }
}