import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";


@Component({
    selector: 'wd-grid',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class WDGridComponent extends OnInit {
    @Input()
    gridOption: any;

    ngOnInit() {
        $('button').on('click', (event) => {
            this.showGrid();
        });
    }

    showGrid() {
        alert('show grid');
    }
}