import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'wd-grid-container',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class WDGridContainerComponent extends OnInit {
    @Input()
    gridContainer: any;
    
    constructor() {
        super();
    }

    ngOnInit() {

    }
}