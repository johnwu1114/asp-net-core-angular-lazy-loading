import { Route } from "@angular/router";
import { RouteUtil } from "./shared/utils/route.util";
import { FirstModule } from "./first/first.routes";
import { SecondModule } from "./second/second.routes";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "first",
        pathMatch: "full",
    },
    {
        path: "first",
        loadChildren: () => FirstModule
    },
    {
        path: "second",
        loadChildren: () => SecondModule
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