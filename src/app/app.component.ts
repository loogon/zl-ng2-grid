import { Component } from "@angular/core";

@Component({
    selector: 'test-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    constructor() {
        this.name = 'test';
    }
}