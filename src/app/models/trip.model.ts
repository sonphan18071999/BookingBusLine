import { Bus } from "./bus.model";
import { BusRoute } from "./routes.model";

export interface Trip extends BusRoute, Bus{
    
}