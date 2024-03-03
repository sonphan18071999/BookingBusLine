import { Route } from "@angular/router";
import { SelectedTripComponent } from "./selected-trip.component";

export const SELECTED_ROUTES: Route[] = [
    {
        path: ':id',
        component:SelectedTripComponent
    }
];
