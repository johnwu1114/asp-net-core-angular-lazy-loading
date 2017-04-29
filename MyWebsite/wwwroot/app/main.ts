import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes.getRoutes())
    ],
    declarations: [
        AppComponent,
        AppRoutes.getComponents()
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);