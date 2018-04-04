import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { WDGridOptions } from './wd-grid-custom-types/wd-grid-options';

@Component({
    selector: 'wd-grid',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class WDGridComponent extends OnInit {
    @Input()
    gridOption: any;

    constructor(private gridOpt: WDGridOptions) {
        super();
    }

    ngOnInit() {
        this.gridOption = this.gridOpt.initialize(this.gridOption);
        
        $('button').on('click', (event) => {
            this.showGrid();
        });
    }

    showGrid() {
        alert('show grid');
    }
}