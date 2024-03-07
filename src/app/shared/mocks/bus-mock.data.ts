import { BusType } from "../../enums/bus-types";
import { Bus } from "../../models/bus.model";

export const busMock: Bus[] = [
    {
        id: "BUS001",
        seats: {
            floorBelow: [
                { id: "A1" },
                { id: "A2" },
                { id: "A3" },
                { id: "A4" },
                { id: "A5" },
                { id: "A6" },
                { id: "A7" },
                { id: "A8" },
                { id: "A9" },
                { id: "A10" },
                { id: "A11" },
                { id: "A12" },
                { id: "A13" },
                { id: "A14" },
                { id: "A15" },
                { id: "A16" },
                { id: "A17" },
                { id: "A18" },
                { id: "A19" },
                { id: "A20" }
            ],
            floorUpper: [
                { id: "B1" },
                { id: "B2" },
                { id: "B3" },
                { id: "B4" },
                { id: "B5" },
                { id: "B6" },
                { id: "B7" },
                { id: "B8" },
                { id: "B9" },
                { id: "B10" },
                { id: "B11" },
                { id: "B12" },
                { id: "B13" },
                { id: "B14" },
                { id: "B15" },
                { id: "B16" },
                { id: "B17" },
                { id: "B18" },
                { id: "B19" },
                { id: "B20" }

            ]
        },
        type: BusType.DOUBLE_DECKER,
        licensePlate: "59 - X2 12345"
    },
    {
        id: "BUS002",
        seats: {
            floorBelow: [
                { id: "A1" },
                { id: "A2" },
                { id: "A3" },
                { id: "A4" },
                { id: "A5" },
                { id: "A6" },
                { id: "A7" },
                { id: "A8" },
                { id: "A9" },
                { id: "A10" },
                { id: "A11" },
                { id: "A12" },
                { id: "A13" },
                { id: "A14" },
                { id: "A15" },
                { id: "A16" },
                { id: "A17" },
                { id: "A18" },
                { id: "A19" },
                { id: "A20" }
            ]
        },
        type: BusType.NORMAL,
        licensePlate: "59 - X2 00000"
    }
]
