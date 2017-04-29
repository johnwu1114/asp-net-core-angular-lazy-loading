import { Route } from "@angular/router";
import { RouteUtil } from "./shared/utils/route.util";
import { FirstRoutes } from "./first/first.routes";
import { SecondRoutes } from "./second/second.routes";

interface RouteItem extends Route {
    menuName?: string;
    children?: RouteItem[];
}

const routes: RouteItem[] = [
    {
        path: "",
        redirectTo: "first",
        pathMatch: "full",
    },
    {
        path: "first",
        loadChildren: () => FirstRoutes
    },
    {
        path: "second",
        loadChildren: () => SecondRoutes
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