"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.goToList = function () {
        this.router.navigate(["list"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "home/home.component.html",
            styleUrls: ["home/home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFPdkM7SUFFRSx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQVRVLGFBQWE7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FHNEIsZUFBTTtPQUZ2QixhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcImhvbWUvaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbiAgfSlcclxuICBleHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnb1RvTGlzdCgpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibGlzdFwiXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9Il19