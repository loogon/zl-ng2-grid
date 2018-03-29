import { Component } from "@angular/core";

@Component({
    selector: 'test-app',
    templateUrl: './app.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    constructor() {
        this.name = 'test';
        this.showName();
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