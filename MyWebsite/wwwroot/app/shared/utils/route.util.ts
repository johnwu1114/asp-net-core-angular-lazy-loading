import { Route } from "@angular/router";

export class RouteUtil {
    public static getComponents(routes: Route[]): any[] {
        let result = this.findComponents(routes).filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        return result;
    }

    private static findComponents(routes: Route[]) {
        let arr: any[] = [];
        routes.forEach(item => {
            if (item.component != null) {
                arr.push(item.component);
            }
            if (item.children != null) {
                this.findComponents(item.children).forEach(com => {
                    arr.push(com);
                });
            }
        });

        arr.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        return arr;
    }
}