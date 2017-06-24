import { NgModule } from "@angular/core";
import { routedComponents, AdminRoutingModule } from "./admin-routing.module";


@NgModule({
    imports: [AdminRoutingModule],
    declarations: [routedComponents]
})
export class AdminModule{


}