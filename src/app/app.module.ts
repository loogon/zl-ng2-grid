import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { WdGridModule } from "../wd-grid/wd-grid.module"

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        WdGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}