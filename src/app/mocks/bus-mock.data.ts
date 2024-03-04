import { BusType } from "../enums/bus-types";
import { Bus } from "../models/bus.model";

export const busMock: Bus[] = [
    {
        id: "1",
        seats: {
            floorBelow: [
                { id: "A1", isOccupied: false },
                { id: "A2", isOccupied: false },
                { id: "A3", isOccupied: false },
                { id: "A4", isOccupied: false },
                { id: "A5", isOccupied: false },
                { id: "A6", isOccupied: false },
                { id: "A7", isOccupied: false },
                { id: "A8", isOccupied: false },
                { id: "A9", isOccupied: false },
                { id: "A10", isOccupied: false },
                { id: "A11", isOccupied: false },
                { id: "A12", isOccupied: false },
                { id: "A13", isOccupied: false },
                { id: "A14", isOccupied: false },
                { id: "A15", isOccupied: false },
                { id: "A16", isOccupied: false },
                { id: "A17", isOccupied: false },
                { id: "A18", isOccupied: false },
                { id: "A19", isOccupied: false },
                { id: "A20", isOccupied: false }
            ],
            floorUpper: [
                { id: "B1", isOccupied: false },
                { id: "B2", isOccupied: false },
                { id: "B3", isOccupied: false },
                { id: "B4", isOccupied: false },
                { id: "B5", isOccupied: false },
                { id: "B6", isOccupied: false },
                { id: "B7", isOccupied: false },
                { id: "B8", isOccupied: false },
                { id: "B9", isOccupied: false },
                { id: "B10", isOccupied: false },
                { id: "B11", isOccupied: false },
                { id: "B12", isOccupied: false },
                { id: "B13", isOccupied: false },
                { id: "B14", isOccupied: false },
                { id: "B15", isOccupied: false },
                { id: "B16", isOccupied: false },
                { id: "B17", isOccupied: false },
                { id: "B18", isOccupied: false },
                { id: "B19", isOccupied: false },
                { id: "B20", isOccupied: false }

            ]
        },
        type: BusType.DOUBLE_DECKER
    },
    {
        id: "1",
        seats: {
            floorBelow: [
                { id: "A1", isOccupied: false },
                { id: "A2", isOccupied: false },
                { id: "A3", isOccupied: false },
                { id: "A4", isOccupied: false },
                { id: "A5", isOccupied: false },
                { id: "A6", isOccupied: false },
                { id: "A7", isOccupied: false },
                { id: "A8", isOccupied: false },
                { id: "A9", isOccupied: false },
                { id: "A10", isOccupied: false },
                { id: "A11", isOccupied: false },
                { id: "A12", isOccupied: false },
                { id: "A13", isOccupied: false },
                { id: "A14", isOccupied: false },
                { id: "A15", isOccupied: false },
                { id: "A16", isOccupied: false },
                { id: "A17", isOccupied: false },
                { id: "A18", isOccupied: false },
                { id: "A19", isOccupied: false },
                { id: "A20", isOccupied: false }
            ]
        },
        type: BusType.NORMAL
    }
]
