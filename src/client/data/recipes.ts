import { Item } from "./items";
import { Building } from './buildings';

export interface Recipe {
    item: Item,
    name: string,
    building: Building,
    inputs: { item: Item, quantity: number }[],
    outputs: { item: Item, quantity: number }[],
    timeSeconds: number
}

const recipes: Recipe[] = [
    {
        item: Item.IronIngot,
        name: "Iron Ingot",
        building: Building.Smelter,
        inputs: [
            {
                item: Item.IronOre,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.IronIngot,
                quantity: 1
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.IronIngot,
        name: "Pure Iron Ingot",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.IronOre,
                quantity: 7
            },
            {
                item: Item.Water,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.IronIngot,
                quantity: 13
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.IronIngot,
        name: "Iron Allow Ingot",
        building: Building.Foundry,
        inputs: [
            {
                item: Item.IronOre,
                quantity: 2
            },
            {
                item: Item.CopperOre,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.IronIngot,
                quantity: 5
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.IronPlate,
        name: "Iron Plate",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.IronIngot,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.IronPlate,
                quantity: 3
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.IronPlate,
        name: "Coated Iron Plate",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.IronIngot,
                quantity: 10
            },
            {
                item: Item.Plastic,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.IronPlate,
                quantity: 15
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.IronPlate,
        name: "Steel Coated Plate",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.SteelIngot,
                quantity: 3
            },
            {
                item: Item.Plastic,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.IronPlate,
                quantity: 18
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.IronRod,
        name: "Iron Rod",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.IronIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.IronRod,
                quantity: 1
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.IronRod,
        name: "Steel Rod",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.SteelIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.IronRod,
                quantity: 4
            }
        ],
        timeSeconds: 5
    },
    {
        item: Item.Screw,
        name: "Screw",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.IronRod,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Screw,
                quantity: 4
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Screw,
        name: "Cast Screw",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.IronIngot,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.Screw,
                quantity: 20
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.Screw,
        name: "Steel Screw",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.SteelBeam,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Screw,
                quantity: 52
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.CopperIngot,
        name: "Copper Ingot",
        building: Building.Smelter,
        inputs: [
            {
                item: Item.IronOre,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.CopperIngot,
                quantity: 1
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.CopperIngot,
        name: "Copper Alloy Ingot",
        building: Building.Foundry,
        inputs: [
            {
                item: Item.CopperOre,
                quantity: 10
            },
            {
                item: Item.IronOre,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.CopperIngot,
                quantity: 20
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.CopperIngot,
        name: "Pure Copper Ingot",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CopperOre,
                quantity: 6
            },
            {
                item: Item.Water,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.CopperIngot,
                quantity: 15
            }
        ],
        timeSeconds: 24
    }
];