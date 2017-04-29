import { Route } from "@angular/router";
import { RouteUtil } from "./shared/utils/route.util";
import { OneComponent } from "./components/one.component";
import { TwoComponent } from "./components/two.component";
import { ThreeComponent } from "./components/three.component";

interface RouteItem extends Route {
    menuName?: string;
    children?: RouteItem[];
}

const routes: RouteItem[] = [
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

export class AppRoutes {
    public static getRoutes(): RouteItem[] {
        return routes;
    }

    public static getComponents(): any[] {
        return RouteUtil.getComponents(routes);
    }
}