import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { enableProdMode} from "@angular/core";
import './polyfills';

console.log(ENV);
if (ENV === 'prod') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => {
    console.log(err);
});