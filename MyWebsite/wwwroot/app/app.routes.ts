import { Route } from "@angular/router";
import { RouteUtil } from "./shared/utils/route.util";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "first",
        pathMatch: "full",
    },
    {
        path: "first",
        loadChildren: "./first/first.routes#FirstModule"
    },
    {
        path: "second",
        loadChildren: "./second/second.routes#SecondModule"
    }
];

export class AppRoutes {
    public static getRoutes(): Route[] {
        return routes;
    }

    public static getComponents(): any[] {
        return RouteUtil.getComponents(routes);
    }
}