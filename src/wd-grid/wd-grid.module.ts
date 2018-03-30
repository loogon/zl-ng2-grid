import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { WDGridComponent } from "./component";
import { WDGridContainerComponent } from "./wd-grid-container/component";
import { WDGridHeaderComponent } from "./wd-grid-container/wd-grid-header/component";
import { WDGridHeaderCellComponent } from "./wd-grid-container/wd-grid-header/wd-grid-header-cell/component";
import { WDGridViewComponent } from "./wd-grid-container/wd-grid-view/component";
import { WDGridFooterComponent } from "./wd-grid-container/wd-grid-footer/component";
import { WDGridRowComponent } from "./wd-grid-container/wd-grid-view/wd-grid-row/component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        WDGridComponent,
        WDGridContainerComponent,
        WDGridHeaderCellComponent,
        WDGridHeaderComponent,
        WDGridRowComponent,
        WDGridViewComponent,
        WDGridFooterComponent
    ],
    providers: [],
    exports: [
        WDGridComponent,
        WDGridContainerComponent,
        WDGridHeaderCellComponent,
        WDGridHeaderComponent,
        WDGridRowComponent,
        WDGridViewComponent,
        WDGridFooterComponent
    ]
})
export class WdGridModule {
}