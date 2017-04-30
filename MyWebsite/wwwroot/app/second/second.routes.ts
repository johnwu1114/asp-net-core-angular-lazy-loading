import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { RouteUtil } from "../shared/utils/route.util";
import { OneComponent } from "./components/one.component";
import { TwoComponent } from "./components/two.component";
import { ThreeComponent } from "./components/three.component";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "one",
        pathMatch: "full",
    }, {
        path: "one",
        component: OneComponent
    }, {
        path: "two",
        component: TwoComponent
    }, {
        path: "three",
        component: ThreeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        RouteUtil.getComponents(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SecondModule { }