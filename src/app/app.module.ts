import { BrowserModule } from "@angular/platform-browser";
import { enableProdMode, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

console.log(ENV);
if (ENV === 'prod') {
    enableProdMode();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}