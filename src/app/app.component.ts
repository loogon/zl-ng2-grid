import { Component } from "@angular/core";

@Component({
    selector: 'test-app',
    templateUrl: './app.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    gridOption: any;
    constructor() {
        this.name = 'test';
        this.showName();
        this.gridOption = {
            gridContainer: {
                gridHeader: {
                    gridHeaderCellList: [
                        {
                            name: 'name',
                            field: 'string'
                        },
                        {
                            name: 'status',
                            field: 'string'
                        }
                    ]
                }
            }
        };
    }

    showName() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.name = 'new test';
                resolve();
            }, 3000);
        });
    }
}