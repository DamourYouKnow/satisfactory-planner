import { Item } from './items';
import { Building } from './buildings';

export interface Recipe {
    item: Item,
    name: string,
    building: Building,
    inputs: { item: Item, quantity: number }[],
    outputs: { item: Item, quantity: number }[],
    timeSeconds: number
}

export const recipes: Recipe[] = [
    {
        item: Item.AdaptiveControlUnit,
        name: "Adaptive Control Unit",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.AutomatedWiring,
                quantity: 15
            },
            {
                item: Item.CircuitBoard,
                quantity: 10
            },
            {
                item: Item.HeavyModularFrame,
                quantity: 2
            },
            {
                item: Item.Computer,
                quantity: 2
            }
        ],
        outputs: [
            {
            item: Item.AdaptiveControlUnit,
            quantity: 2
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.AILimiter,
        name: "AI Limiter",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.CopperSheet,
                quantity: 5
            },
            {
                item: Item.Quickwire,
                quantity: 20
            }
        ],
        outputs: [
            {
                item: Item.AILimiter,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.AlcladAluminumSheet,
        name: "Alclad Aluminum Sheet",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.AluminumIngot,
                quantity: 3
            },
            {
                item: Item.CopperIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.AlcladAluminumSheet,
                quantity: 3
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.AluminumCasing,
        name: "Aluminum Casing",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.AluminumIngot,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.AluminumCasing,
                quantity: 2
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.AluminumCasing,
        name: "Alclad Casing",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.AluminumIngot,
                quantity: 20
            },
            {
                item: Item.CopperIngot,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.AluminumCasing,
                quantity: 15
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.AluminumIngot,
        name: "Aluminum Ingot",
        building: Building.Foundry,
        inputs: [
            {
                item: Item.AluminumScrap,
                quantity: 6
            },
            {
                item: Item.Silica,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.AluminumIngot,
                quantity: 4
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.AluminumIngot,
        name: "Pure Aluminum Ingot",
        building: Building.Smelter,
        inputs: [
            {
                item: Item.AluminumScrap,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.AluminumIngot,
                quantity: 1
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.AssemblyDirectorSystem,
        name: "Assembly Director System",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.AdaptiveControlUnit,
                quantity: 2
            },
            {
                item: Item.Supercomputer,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.AssemblyDirectorSystem,
                quantity: 1
            }
        ],
        timeSeconds: 80
    },
    {
        item: Item.AutomatedWiring,
        name: "Automated Wiring",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Stator,
                quantity: 1
            },
            {
                item: Item.Cable,
                quantity: 20
            }
        ],
        outputs: [
            {
                item: Item.AutomatedWiring,
                quantity: 1
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.AutomatedWiring,
        name: "Automated Speed Wiring",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Stator,
                quantity: 2
            },
            {
                item: Item.Wire,
                quantity: 40
            },
            {
                item: Item.HighSpeedConnector,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.AutomatedWiring,
                quantity: 4
            }
        ],
        timeSeconds: 32
    },
    {
        item: Item.Battery,
        name: "Battery",
        building: Building.Blender,
        inputs: [
            {
                item: Item.SulfuricAcid,
                quantity: 2.5
            },
            {
                item: Item.AluminaSolution,
                quantity: 2
            },
            {
                item: Item.AluminumCasing,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Battery,
                quantity: 1
            },
            {
                item: Item.Water,
                quantity: 1.5
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.Battery,
        name: "Classic Battery",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Sulfur,
                quantity: 6
            },
            {
                item: Item.AlcladAluminumSheet,
                quantity: 7
            },
            {
                item: Item.Plastic,
                quantity: 8
            },
            {
                item: Item.Wire,
                quantity: 12
            }
        ],
        outputs: [
            {
                item: Item.Battery,
                quantity: 4
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.Beacon,
        name: "Beacon",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.IronPlate,
                quantity: 3
            },
            {
                item: Item.IronRod,
                quantity: 1
            },
            {
                item: Item.Wire,
                quantity: 15
            },
            {
                item: Item.Cable,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Beacon,
                quantity: 1
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.Beacon,
        name: "Crystal Beacon",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.SteelBeam,
                quantity: 4
            },
            {
                item: Item.SteelPipe,
                quantity: 16
            },
            {
                item: Item.CrystalOscillator,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Beacon,
                quantity: 20
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.Biomass,
        name: "Biomass (Leaves)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Leaves,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.Biomass,
                quantity: 5
            }
        ],
        timeSeconds: 5
    },
    {
        item: Item.Biomass,
        name: "Biomass (Wood)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Wood,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.Biomass,
                quantity: 20
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.Biomass,
        name: "Biomass (Mycelia)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Mycelia,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.Biomass,
                quantity: 10
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.Biomass,
        name: "Biomass (Alien Carapace)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.AlienCarapace,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Biomass,
                quantity: 100
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.Biomass,
        name: "Biomass (Alien Organs)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.AlienOrgans,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Biomass,
                quantity: 200
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.BlackPowder,
        name: "Black Powder",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Coal,
                quantity: 1
            },
            {
                item: Item.Sulfur,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.BlackPowder,
                quantity: 1
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.BlackPowder,
        name: "Fine Black Powder",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Sulfur,
                quantity: 2
            },
            {
                item: Item.CompactedCoal,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.BlackPowder,
                quantity: 4
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.Cable,
        name: "Cable",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Wire,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Cable,
                quantity: 1
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.Cable,
        name: "Coated Cable",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.Wire,
                quantity: 5
            },
            {
                item: Item.HeavyOilResidue,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Cable,
                quantity: 9
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.Cable,
        name: "Insulated Cable",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Wire,
                quantity: 9
            },
            {
                item: Item.Rubber,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.Cable,
                quantity: 20
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.Cable,
        name: "Quickwire Cable",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Quickwire,
                quantity: 3
            },
            {
                item: Item.Rubber,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Cable,
                quantity: 11
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.CateriumIngot,
        name: "Caterium Ingot",
        building: Building.Smelter,
        inputs: [
            {
                item: Item.CateriumOre,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.CateriumIngot,
                quantity: 1
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.CateriumIngot,
        name: "Pure Caterium Ingot",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CateriumOre,
                quantity: 2
            },
            {
                item: Item.Water,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.CateriumIngot,
                quantity: 1
            }
        ],
        timeSeconds: 5
    },
    {
        item: Item.CircuitBoard,
        name: "Circuit Board",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.CopperSheet,
                quantity: 2
            },
            {
                item: Item.Plastic,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.CircuitBoard,
                quantity: 1
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.CircuitBoard,
        name: "Electrode Circuit Board",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Rubber,
                quantity: 6
            },
            {
                item: Item.PetroleumCoke,
                quantity: 9
            }
        ],
        outputs: [
            {
                item: Item.CircuitBoard,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.CircuitBoard,
        name: "Silicon Circuit Board",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.CopperSheet,
                quantity: 11
            },
            {
                item: Item.Silica,
                quantity: 11
            }
        ],
        outputs: [
            {
                item: Item.CircuitBoard,
                quantity: 5
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.CircuitBoard,
        name: "Caterium Circuit Board",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Plastic,
                quantity: 10
            },
            {
                item: Item.Quickwire,
                quantity: 30
            }
        ],
        outputs: [
            {
                item: Item.CircuitBoard,
                quantity: 7
            }
        ],
        timeSeconds: 48
    },
    {
        item: Item.Coal,
        name: "Coal",
        building: Building.Miner,
        inputs: [

        ],
        outputs: [
            {
                item: Item.Coal,
                quantity: 1
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.Coal,
        name: "Biocoal",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Biomass,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.Coal,
                quantity: 6
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.Coal,
        name: "Charcoal",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Wood,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Coal,
                quantity: 10
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.CompactedCoal,
        name: "Compacted Coal",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Coal,
                quantity: 5
            },
            {
                item: Item.Sulfur,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.CompactedCoal,
                quantity: 5
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.Computer,
        name: "Computer",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.CircuitBoard,
                quantity: 10
            },
            {
                item: Item.Cable,
                quantity: 9
            },
            {
                item: Item.Plastic,
                quantity: 18
            },
            {
                item: Item.Screw,
                quantity: 52
            }
        ],
        outputs: [
            {
                item: Item.Computer,
                quantity: 1
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.Computer,
        name: "Crystal Computer",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.CircuitBoard,
                quantity: 8
            },
            {
                item: Item.CrystalOscillator,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.Computer,
                quantity: 3
            }
        ],
        timeSeconds: 64
    },
    {
        item: Item.Computer,
        name: "Caterium Computer",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.CircuitBoard,
                quantity: 7
            },
            {
                item: Item.Quickwire,
                quantity: 28
            },
            {
                item: Item.Rubber,
                quantity: 12
            }
        ],
        outputs: [
            {
                item: Item.Computer,
                quantity: 1
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.Concrete,
        name: "Concrete",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Limestone,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.Concrete,
                quantity: 1
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.Concrete,
        name: "Rubber Concrete",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Limestone,
                quantity: 10
            },
            {
                item: Item.Rubber,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Concrete,
                quantity: 9
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.Concrete,
        name: "Wet Concrete",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.Limestone,
                quantity: 6
            },
            {
                item: Item.Water,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.Concrete,
                quantity: 4
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.Concrete,
        name: "Fine Concrete",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Silica,
                quantity: 3
            },
            {
                item: Item.Limestone,
                quantity: 12
            }
        ],
        outputs: [
            {
                item: Item.Concrete,
                quantity: 10
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.CoolingSystem,
        name: "Cooling System",
        building: Building.Blender,
        inputs: [
            {
                item: Item.HeatSink,
                quantity: 2
            },
            {
                item: Item.Rubber,
                quantity: 2
            },
            {
                item: Item.Water,
                quantity: 5
            },
            {
                item: Item.NitrogenGas,
                quantity: 25
            }
        ],
        outputs: [
            {
                item: Item.CoolingSystem,
                quantity: 1
            }
        ],
        timeSeconds: 10
    },
    {
        item: Item.CoolingSystem,
        name: "Cooling Device",
        building: Building.Blender,
        inputs: [
            {
                item: Item.HeatSink, 
                quantity: 5
            },
            {
                item: Item.Motor,
                quantity: 1
            },
            {
                item: Item.NitrogenGas,
                quantity: 24
            }
        ],
        outputs: [
            {
                item: Item.CoolingSystem,
                quantity: 2
            }
        ],
        timeSeconds: 32
    },
    {
        item: Item.CopperIngot,
        name: "Copper Ingot",
        building: Building.Smelter,
        inputs: [
            {
                item: Item.CopperOre,
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
    },
    {
        item: Item.CopperPowder,
        name: "Copper Powder",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.CopperIngot,
                quantity: 30
            }
        ],
        outputs: [
            {
                item: Item.CopperPowder,
                quantity: 5
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.CopperSheet,
        name: "Copper Sheet",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.CopperIngot,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.CopperSheet,
                quantity: 1
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.CopperSheet,
        name: "Steamed Copper Sheet",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CopperIngot,
                quantity: 3
            },
            {
                item: Item.Water,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.CopperSheet,
                quantity: 3
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.CrudeOil,
        name: "Crude Oil",
        building: Building.OilExtractor,
        inputs: [

        ],
        outputs: [
            {
                item: Item.CrudeOil,
                quantity: 2
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.CrudeOil,
        name: "Unpackage Oil",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedOil,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.CrudeOil,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.CrystalOscillator,
        name: "Crystal Oscillator",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.QuartzCrystal,
                quantity: 36
            },
            {
                item: Item.Cable,
                quantity: 28
            },
            {
                item: Item.ReinforcedIronPlate,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.CrystalOscillator,
                quantity: 2
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.CrystalOscillator,
        name: "Insulated Crystal Oscillator",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.QuartzCrystal,
                quantity: 10
            },
            {
                item: Item.Rubber,
                quantity: 7
            },
            {
                item: Item.AILimiter,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.CrystalOscillator,
                quantity: 1
            }
        ],
        timeSeconds: 32
    },
    {
        item: Item.ElectromagneticControlRod,
        name: "Electromagnetic Control Rod",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Stator,
                quantity: 3
            },
            {
                item: Item.AILimiter,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.ElectromagneticControlRod,
                quantity: 2
            }
        ],
        timeSeconds: 30
    },
    {
        item: Item.ElectromagneticControlRod,
        name: "Electromagnetic Connection Rod",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Stator,
                quantity: 2
            },
            {
                item: Item.HighSpeedConnector,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.ElectromagneticControlRod,
                quantity: 2
            }
        ],
        timeSeconds: 15
    },
    {
        item: Item.EmptyCanister,
        name: "Empty Canister",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Plastic,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.EmptyCanister,
                quantity: 4
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.EmptyCanister,
        name: "Unpackage Sulfuric Acid",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedSulfuricAcid,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.SulfuricAcid,
                quantity: 1
            },
            {
                item: Item.EmptyCanister,
                quantity: 1
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.EmptyCanister,
        name: "Unpackage Alumina Solution",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedAluminaSolution,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.AluminaSolution,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.EmptyCanister,
        name: "Unpackage Water",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedWater,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Water,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.EmptyCanister,
        name: "Unpackage Turbofuel",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedTurbofuel,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Turbofuel,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.EmptyCanister,
        name: "Unpackage Heavy Oil Residue",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedHeavyOilResidue,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.HeavyOilResidue,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.EmptyCanister,
        name: "Unpackage Fuel",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedFuel,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Fuel,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.EmptyCanister,
        name: "Unpackage Liquid Biofuel",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedLiquidBiofuel,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.LiquidBiofuel,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.EmptyCanister,
        name: "Steel Canister",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.SteelIngot,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.EmptyCanister,
        name: "Coated Iron Canister",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.IronPlate,
                quantity: 2
            },
            {
                item: Item.CopperSheet,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.EmptyCanister,
                quantity: 4
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.EmptyFluidTank,
        name: "Empty Fluid Tank",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.AluminumIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.EmptyFluidTank,
                quantity: 1
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.EmptyFluidTank,
        name: "Unpackage Nitric Acid",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedNitricAcid,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.NitricAcid,
                quantity: 1
            },
            {
                item: Item.EmptyFluidTank,
                quantity: 1
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.EmptyFluidTank,
        name: "Unpackage Nitrogen Gas",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedNitrogenGas,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.NitrogenGas,
                quantity: 4
            },
            {
                item: Item.EmptyFluidTank,
                quantity: 1
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.EncasedIndustrialBeam,
        name: "Encased Industrial Beam",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.SteelBeam,
                quantity: 4
            },
            {
                item: Item.Concrete,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.EncasedIndustrialBeam,
                quantity: 1
            }
        ],
        timeSeconds: 10
    },
    {
        item: Item.EncasedIndustrialBeam,
        name: "Encased Industrial Pipe",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.SteelPipe,
                quantity: 7
            },
            {
                item: Item.Concrete,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.EncasedIndustrialBeam,
                quantity: 1
            }
        ],
        timeSeconds: 15
    },
    {
        item: Item.EncasedPlutoniumCell,
        name: "Encased Plutonium Cell",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.PlutoniumPellet,
                quantity: 2
            },
            {
                item: Item.Concrete,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.EncasedPlutoniumCell,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.EncasedPlutoniumCell,
        name: "Instant Plutonium Cell",
        building: Building.ParticleAccelerator,
        inputs: [
            {
                item: Item.NonFissileUranium,
                quantity: 150
            },
            {
                item: Item.AluminumCasing,
                quantity: 20
            }
        ],
        outputs: [
            {
                item: Item.EncasedPlutoniumCell,
                quantity: 20
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.EncasedUraniumCell,
        name: "Encased Uranium Cell",
        building: Building.Blender,
        inputs: [
            {
                item: Item.Uranium,
                quantity: 10
            },
            {
                item: Item.Concrete,
                quantity: 3
            },
            {
                item: Item.SulfuricAcid,
                quantity: 8
            }
        ],
        outputs: [
            {
                item: Item.EncasedUraniumCell,
                quantity: 5
            },
            {
                item: Item.SulfuricAcid,
                quantity: 2
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.EncasedUraniumCell,
        name: "Infused Uranium Cell",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Uranium,
                quantity: 5
            },
            {
                item: Item.Silica,
                quantity: 3
            },
            {
                item: Item.Sulfur,
                quantity: 5
            },
            {
                item: Item.Quickwire,
                quantity: 15
            }
        ],
        outputs: [
            {
                item: Item.EncasedUraniumCell,
                quantity: 4
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.Fabric,
        name: "Fabric",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Mycelia,
                quantity: 1
            },
            {
                item: Item.Biomass,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.Fabric,
                quantity: 1
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.Fabric,
        name: "Polyester Fabric",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.PolymerResin,
                quantity: 16
            },
            {
                item: Item.Water,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.Fabric,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.FusedModularFrame,
        name: "Fused Modular Frame",
        building: Building.Blender,
        inputs: [
            {
                item: Item.HeavyModularFrame,
                quantity: 1
            },
            {
                item: Item.AluminumCasing,
                quantity: 50
            },
            {
                item: Item.NitrogenGas,
                quantity: 25
            }
        ],
        outputs: [
            {
                item: Item.FusedModularFrame,
                quantity: 1
            }
        ],
        timeSeconds: 40
    },
    {
        item: Item.FusedModularFrame,
        name: "Heat-Fused Frame",
        building: Building.Blender,
        inputs: [
            {
                item: Item.HeavyModularFrame,
                quantity: 1
            },
            {
                item: Item.AluminumIngot,
                quantity: 50
            },
            {
                item: Item.NitricAcid,
                quantity: 8
            },
            {
                item: Item.Fuel,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.FusedModularFrame,
                quantity: 1
            }
        ],
        timeSeconds: 20
    },
    {
        item: Item.GasFilter,
        name: "Gas Filter",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Coal,
                quantity: 5
            },
            {
                item: Item.Rubber,
                quantity: 2
            },
            {
                item: Item.Fabric,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.GasFilter,
                quantity: 1
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.HeatSink,
        name: "Heat Sink",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.AlcladAluminumSheet,
                quantity: 5
            },
            {
                item: Item.CopperSheet,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.HeatSink,
                quantity: 1
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.HeatSink,
        name: "Heat Exchanger",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.AluminumCasing,
                quantity: 3
            },
            {
                item: Item.Rubber,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.HeatSink,
                quantity: 1
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.HeavyModularFrame,
        name: "Heavy Modular Frame",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.ModularFrame,
                quantity: 5
            },
            {
                item: Item.SteelPipe,
                quantity: 15
            },
            {
                item: Item.EncasedIndustrialBeam,
                quantity: 5
            },
            {
                item: Item.Screw,
                quantity: 100
            }
        ],
        outputs: [
            {
                item: Item.HeavyModularFrame,
                quantity: 1
            }
        ],
        timeSeconds: 30
    },
    {
        item: Item.HeavyModularFrame,
        name: "Heavy Flexible Frame",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.ModularFrame,
                quantity: 5
            },
            {
                item: Item.EncasedIndustrialBeam,
                quantity: 3
            },
            {
                item: Item.Rubber,
                quantity: 20
            },
            {
                item: Item.Screw,
                quantity: 104
            }
        ],
        outputs: [
            {
                item: Item.HeavyModularFrame,
                quantity: 1
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.HeavyModularFrame,
        name: "Heavy Encased Frame",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.ModularFrame,
                quantity: 8
            },
            {
                item: Item.EncasedIndustrialBeam,
                quantity: 10
            },
            {
                item: Item.SteelPipe,
                quantity: 36
            },
            {
                item: Item.Concrete,
                quantity: 22
            }
        ],
        outputs: [
            {
                item: Item.HeavyModularFrame,
                quantity: 3
            }
        ],
        timeSeconds: 64
    },
    {
        item: Item.HighSpeedConnector,
        name: "High-Speed Connector",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Quickwire,
                quantity: 56
            },
            {
                item: Item.Cable,
                quantity: 10
            },
            {
                item: Item.CircuitBoard,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.HighSpeedConnector,
                quantity: 1
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.HighSpeedConnector,
        name: "Silicon High-Speed Connector",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Quickwire,
                quantity: 60
            },
            {
                item: Item.Silica,
                quantity: 25
            },
            {
                item: Item.CircuitBoard,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.HighSpeedConnector,
                quantity: 2
            }
        ],
        timeSeconds: 40
    },
    {
        item: Item.IodineInfusedFilter,
        name: "Iodine Infused Filter",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.GasFilter,
                quantity: 1
            },
            {
                item: Item.Quickwire,
                quantity: 8
            },
            {
                item: Item.AluminumCasing,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.IodineInfusedFilter,
                quantity: 1
            }
        ],
        timeSeconds: 16
    },
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
        name: "Iron Alloy Ingot",
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
                quantity: 2
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
        timeSeconds: 18
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
        item: Item.MagneticFieldGenerator,
        name: "Magnetic Field Generator",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.VersatileFramework,
                quantity: 5
            },
            {
                item: Item.ElectromagneticControlRod,
                quantity: 2
            },
            {
                item: Item.Battery,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.MagneticFieldGenerator,
                quantity: 2
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.ModularEngine,
        name: "Modular Engine",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Motor,
                quantity: 2
            },
            {
                item: Item.Rubber,
                quantity: 15
            },
            {
                item: Item.SmartPlating,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.ModularEngine,
                quantity: 1
            }
        ],
        timeSeconds: 60
    },
    {
        item: Item.ModularFrame,
        name: "Modular Frame",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 3
            },
            {
                item: Item.IronRod,
                quantity: 12
            }
        ],
        outputs: [
            {
                item: Item.ModularFrame,
                quantity: 2
            }
        ],
        timeSeconds: 60
    },
    {
        item: Item.ModularFrame,
        name: "Bolted Frame",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 3
            },
            {
                item: Item.Screw,
                quantity: 56
            }
        ],
        outputs: [
            {
                item: Item.ModularFrame,
                quantity: 2
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.ModularFrame,
        name: "Steeled Frame",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 2
            },
            {
                item: Item.SteelPipe,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.ModularFrame,
                quantity: 3
            }
        ],
        timeSeconds: 60
    },
    {
        item: Item.Motor,
        name: "Motor",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.Rotor,
                quantity: 2
            },
            {
                item: Item.Stator,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Motor,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.Motor,
        name: "Rigour Motor",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Rotor,
                quantity: 3
            },
            {
                item: Item.Stator,
                quantity: 3
            },
            {
                item: Item.CrystalOscillator,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Motor,
                quantity: 6
            }
        ],
        timeSeconds: 48
    },
    {
        item: Item.Motor,
        name: "Electric Motor",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.ElectromagneticControlRod,
                quantity: 1
            },
            {
                item: Item.Rotor,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Motor,
                quantity: 2
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.NonFissileUranium,
        name: "Non-Fissile Uranium",
        building: Building.Blender,
        inputs: [
            {
                item: Item.UraniumWaste,
                quantity: 15
            },
            {
                item: Item.Silica,
                quantity: 10
            },
            {
                item: Item.NitricAcid,
                quantity: 6
            },
            {
                item: Item.SulfuricAcid,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.NonFissileUranium,
                quantity: 20
            },
            {
                item: Item.Water,
                quantity: 6
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.NonFissileUranium,
        name: "Fertile Uranium",
        building: Building.Blender,
        inputs: [
            {
                item: Item.Uranium,
                quantity: 5
            },
            {
                item: Item.UraniumWaste,
                quantity: 5
            },
            {
                item: Item.NitricAcid,
                quantity: 3
            },
            {
                item: Item.SulfuricAcid,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.NonFissileUranium,
                quantity: 20
            },
            {
                item: Item.Water,
                quantity: 8
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.NuclearPasta,
        name: "Nuclear Pasta",
        building: Building.ParticleAccelerator,
        inputs: [
            {
                item: Item.CopperPowder,
                quantity: 20
            },
            {
                item: Item.PressureConversionCube,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.NuclearPasta,
                quantity: 1
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.PackagedAluminaSolution,
        name: "Packaged Alumina Solution",
        building: Building.Packager,
        inputs: [
            {
                item: Item.AluminaSolution,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedAluminaSolution,
                quantity: 2
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.PackagedFuel,
        name: "Packaged Fuel",
        building: Building.Packager,
        inputs: [
            {
                item: Item.Fuel,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedFuel,
                quantity: 2
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.PackagedFuel,
        name: "Diluted Packaged Fuel",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.HeavyOilResidue,
                quantity: 1
            },
            {
                item: Item.PackagedWater,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedFuel,
                quantity: 2
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.PackagedHeavyOilResidue,
        name: "Packaged Heavy Oil Residue",
        building: Building.Packager,
        inputs: [
            {
                item: Item.HeavyOilResidue,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedHeavyOilResidue,
                quantity: 2
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.PackagedLiquidBiofuel,
        name: "Packaged Liquid Biofuel",
        building: Building.Packager,
        inputs: [
            {
                item: Item.LiquidBiofuel,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedLiquidBiofuel,
                quantity: 2
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.PackagedNitricAcid,
        name: "Packaged Nitric Acid",
        building: Building.Packager,
        inputs: [
            {
                item: Item.NitricAcid,
                quantity: 1
            },
            {
                item: Item.EmptyFluidTank,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.PackagedNitricAcid,
                quantity: 1
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.PackagedNitrogenGas,
        name: "Packaged Nitrogen Gas",
        building: Building.Packager,
        inputs: [
            {
                item: Item.NitrogenGas,
                quantity: 4
            },
            {
                item: Item.EmptyFluidTank,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.PackagedNitrogenGas,
                quantity: 1
            }
        ],
        timeSeconds: 1
    },
    {
        item: Item.PackagedOil,
        name: "Packaged Oil",
        building: Building.Packager,
        inputs: [
            {
                item: Item.CrudeOil,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedOil,
                quantity: 2
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.PackagedSulfuricAcid,
        name: "Packaged Sulfuric Acid",
        building: Building.Packager,
        inputs: [
            {
                item: Item.SulfuricAcid,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedSulfuricAcid,
                quantity: 2
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.PackagedTurbofuel,
        name: "Packaged Turbofuel",
        building: Building.Packager,
        inputs: [
            {
                item: Item.Turbofuel,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedTurbofuel,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.PackagedWater,
        name: "Packaged Water",
        building: Building.Packager,
        inputs: [
            {
                item: Item.Water,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PackagedWater,
                quantity: 2
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.PetroleumCoke,
        name: "Petroleum Coke",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.HeavyOilResidue,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.PetroleumCoke,
                quantity: 12
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Plastic,
        name: "Plastic",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CrudeOil,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.Plastic,
                quantity: 2
            },
            {
                item: Item.HeavyOilResidue,
                quantity: 1
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Plastic,
        name: "Residual Plastic",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.PolymerResin,
                quantity: 6
            },
            {
                item: Item.Water,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Plastic,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Plastic,
        name: "Recycled Plastic",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.Rubber,
                quantity: 6
            },
            {
                item: Item.Fuel,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.Plastic,
                quantity: 12
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.PlutoniumFuelRod,
        name: "Plutonium Fuel Rod",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.EncasedPlutoniumCell,
                quantity: 30
            },
            {
                item: Item.SteelBeam,
                quantity: 18
            },
            {
                item: Item.ElectromagneticControlRod,
                quantity: 6
            },
            {
                item: Item.HeatSink,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.PlutoniumFuelRod,
                quantity: 1
            }
        ],
        timeSeconds: 240
    },
    {
        item: Item.PlutoniumFuelRod,
        name: "Plutonium Fuel Unit",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.EncasedPlutoniumCell,
                quantity: 20
            },
            {
                item: Item.PressureConversionCube,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.PlutoniumFuelRod,
                quantity: 1
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.PlutoniumPellet,
        name: "Plutonium Pellet",
        building: Building.ParticleAccelerator,
        inputs: [
            {
                item: Item.NonFissileUranium,
                quantity: 100
            },
            {
                item: Item.UraniumWaste,
                quantity: 25
            }
        ],
        outputs: [
            {
                item: Item.PlutoniumPellet,
                quantity: 30
            }
        ],
        timeSeconds: 60
    },
    {
        item: Item.PlutoniumWaste,
        name: "Plutonium Waste",
        building: Building.NuclearPowerPlant,
        inputs: [
            {
                item: Item.PlutoniumFuelRod,
                quantity: 1
            },
            {
                item: Item.Water,
                quantity: 3000
            }
        ],
        outputs: [
            {
                item: Item.PlutoniumWaste,
                quantity: 10
            }
        ],
        timeSeconds: 600
    },
    {
        item: Item.PolymerResin,
        name: "Fuel",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CrudeOil,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.Fuel,
                quantity: 4
            },
            {
                item: Item.PolymerResin,
                quantity: 3
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.PolymerResin,
        name: "Polymer Resin",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CrudeOil,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.PolymerResin,
                quantity: 13
            },
            {
                item: Item.HeavyOilResidue,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.PolymerResin,
        name: "Heavy Oil Residue",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CrudeOil,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.HeavyOilResidue,
                quantity: 4
            },
            {
                item: Item.PolymerResin,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.PowerShard,
        name: "Power Shard (1)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.BluePowerSlug,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.PowerShard,
                quantity: 1
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.PowerShard,
        name: "Power Shard (2)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.YellowPowerSlug,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.PowerShard,
                quantity: 2
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.PowerShard,
        name: "Power Shard (3)",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.PurplePowerSlug,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.PowerShard,
                quantity: 5
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.PressureConversionCube,
        name: "Pressure Conversion Cube",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.FusedModularFrame,
                quantity: 1
            },
            {
                item: Item.RadioControlUnit,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.PressureConversionCube,
                quantity: 1
            }
        ],
        timeSeconds: 60
    },
    {
        item: Item.QuartzCrystal,
        name: "Quartz Crystal",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.RawQuartz,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.QuartzCrystal,
                quantity: 3
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.QuartzCrystal,
        name: "Pure Quartz Crystal",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.RawQuartz,
                quantity: 9
            },
            {
                item: Item.Water,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.QuartzCrystal,
                quantity: 7
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.Quickwire,
        name: "Quickwire",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.CateriumIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Quickwire,
                quantity: 1
            }
        ],
        timeSeconds: 5
    },
    {
        item: Item.Quickwire,
        name: "Fused Quickwire",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.CateriumIngot,
                quantity: 1
            },
            {
                item: Item.CopperIngot,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.Quickwire,
                quantity: 12
            }
        ],
        timeSeconds: 8,
    },
    {
        item: Item.RadioControlUnit,
        name: "Radio Control Unit",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.AluminumCasing,
                quantity: 32
            },
            {
                item: Item.CrystalOscillator,
                quantity: 1
            },
            {
                item: Item.Computer,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.RadioControlUnit,
                quantity: 2
            }
        ],
        timeSeconds: 48
    },
    {
        item: Item.RadioControlUnit,
        name: "Radio Control System",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.CrystalOscillator,
                quantity: 1
            },
            {
                item: Item.CircuitBoard,
                quantity: 10
            },
            {
                item: Item.AluminumCasing,
                quantity: 60
            },
            {
                item: Item.Rubber,
                quantity: 30
            }
        ],
        outputs: [
            {
                item: Item.RadioControlUnit,
                quantity: 3
            }
        ],
        timeSeconds: 40
    },
    {
        item: Item.RadioControlUnit,
        name: "Radio Connection Unit",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.HeatSink,
                quantity: 4
            },
            {
                item: Item.HighSpeedConnector,
                quantity: 2
            },
            {
                item: Item.QuartzCrystal,
                quantity: 12
            }
        ],
        outputs: [
            {
                item: Item.RadioControlUnit,
                quantity: 1
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.ReinforcedIronPlate,
        name: "Reinforced Iron Plate",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.IronPlate,
                quantity: 6
            },
            {
                item: Item.Screw,
                quantity: 12
            }
        ],
        outputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.ReinforcedIronPlate,
        name: "Adhered Iron Plate",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.IronPlate,
                quantity: 3
            },
            {
                item: Item.Rubber,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 1
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.ReinforcedIronPlate,
        name: "Bolted Iron Plate",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.IronPlate,
                quantity: 18
            },
            {
                item: Item.Screw,
                quantity: 50
            }
        ],
        outputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 3
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.ReinforcedIronPlate,
        name: "Stitched Iron Plate",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.IronPlate,
                quantity: 10
            },
            {
                item: Item.Wire,
                quantity: 20
            }
        ],
        outputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 3
            }
        ],
        timeSeconds: 32
    },
    {
        item: Item.RifleCartridge,
        name: "Rifle Cartridge",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Beacon,
                quantity: 1
            },
            {
                item: Item.SteelPipe,
                quantity: 10
            },
            {
                item: Item.BlackPowder,
                quantity: 10
            },
            {
                item: Item.Rubber,
                quantity: 10
            }
        ],
        outputs: [
            {
                item: Item.RifleCartridge,
                quantity: 5
            }
        ],
        timeSeconds: 20
    },
    {
        item: Item.Rotor,
        name: "Rotor",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.IronRod,
                quantity: 5
            },
            {
                item: Item.Screw,
                quantity: 25
            }
        ],
        outputs: [
            {
                item: Item.Rotor,
                quantity: 1
            }
        ],
        timeSeconds: 15
    },
    {
        item: Item.Rotor,
        name: "Copper Rotor",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.CopperSheet,
                quantity: 6
            },
            {
                item: Item.Screw,
                quantity: 52
            }
        ],
        outputs: [
            {
                item: Item.Rotor,
                quantity: 3
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.Rotor,
        name: "Steel Rotor",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.SteelPipe,
                quantity: 2
            },
            {
                item: Item.Wire,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.Rotor,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.Rubber,
        name: "Rubber",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.CrudeOil,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.Rubber,
                quantity: 2
            },
            {
                item: Item.HeavyOilResidue,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Rubber,
        name: "Residual Rubber",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.PolymerResin,
                quantity: 4
            },
            {
                item: Item.Water,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.Rubber,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Rubber,
        name: "Recycled Rubber",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.Plastic,
                quantity: 3
            },
            {
                item: Item.Fuel,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.Rubber,
                quantity: 12
            }
        ],
        timeSeconds: 12
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
        item: Item.Silica,
        name: "Alumina Solution",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.Bauxite,
                quantity: 12
            },
            {
                item: Item.Water,
                quantity: 18
            }
        ],
        outputs: [
            {
                item: Item.AluminaSolution,
                quantity: 12
            },
            {
                item: Item.Silica,
                quantity: 5
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Silica,
        name: "Silica",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.RawQuartz,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.Silica,
                quantity: 5
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.Silica,
        name: "Cheap Silica",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.RawQuartz,
                quantity: 3
            },
            {
                item: Item.Limestone,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.Silica,
                quantity: 7
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.SmartPlating,
        name: "Smart Plating",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 1
            },
            {
                item: Item.Rotor,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.SmartPlating,
                quantity: 1
            }
        ],
        timeSeconds: 30
    },
    {
        item: Item.SmartPlating,
        name: "Plastic Smart Plating",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.ReinforcedIronPlate,
                quantity: 1
            },
            {
                item: Item.Rotor,
                quantity: 1
            },
            {
                item: Item.Plastic,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.SmartPlating,
                quantity: 2
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.SolidBiofuel,
        name: "Solid Biofuel",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.Biomass,
                quantity: 8
            }
        ],
        outputs: [
            {
                item: Item.SolidBiofuel,
                quantity: 4
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.SpikedRebar,
        name: "Spiked Rebar",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.IronRod,
                quantity: 1
            },
        ],
        outputs: [
            {
                item: Item.SpikedRebar,
                quantity: 1
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.Stator,
        name: "Stator",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.SteelPipe,
                quantity: 3
            },
            {
                item: Item.Wire,
                quantity: 8
            }
        ],
        outputs: [
            {
                item: Item.Stator,
                quantity: 1
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.Stator,
        name: "Quickwire Stator",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.SteelPipe,
                quantity: 4
            },
            {
                item: Item.Quickwire,
                quantity: 15
            }
        ],
        outputs: [
            {
                item: Item.Stator,
                quantity: 2
            }
        ],
        timeSeconds: 2
    },
    {
        item: Item.SteelBeam,
        name: "Steel Beam",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.SteelIngot,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.SteelBeam,
                quantity: 1
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.SteelIngot,
        name: "Steel Ingot",
        building: Building.Foundry,
        inputs: [
            {
                item: Item.IronOre,
                quantity: 3
            },
            {
                item: Item.Coal,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.SteelIngot,
                quantity: 3
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.SteelIngot,
        name: "Coke Steel Ingot",
        building: Building.Foundry,
        inputs: [
            {
                item: Item.IronOre,
                quantity: 15
            },
            {
                item: Item.PetroleumCoke,
                quantity: 15
            }
        ],
        outputs: [
            {
                item: Item.SteelIngot,
                quantity: 20
            }
        ],
        timeSeconds: 12
    },
    {
        item: Item.SteelIngot,
        name: "Compacted Steel Ingot",
        building: Building.Foundry,
        inputs: [
            {
                item: Item.IronOre,
                quantity: 6
            },
            {
                item: Item.CompactedCoal,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.SteelIngot,
                quantity: 10
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.SteelIngot,
        name: "Solid Steel Ingot",
        building: Building.Foundry,
        inputs: [
            {
                item: Item.IronIngot,
                quantity: 2
            },
            {
                item: Item.Coal,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.SteelIngot,
                quantity: 3
            }
        ],
        timeSeconds: 3
    },
    {
        item: Item.SteelPipe,
        name: "Steel Pipe",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.SteelIngot,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.SteelPipe,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Supercomputer,
        name: "Supercomputer",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Computer,
                quantity: 2
            },
            {
                item: Item.AILimiter,
                quantity: 2
            },
            {
                item: Item.HighSpeedConnector,
                quantity: 3
            },
            {
                item: Item.Plastic,
                quantity: 28
            }
        ],
        outputs: [
            {
                item: Item.Supercomputer,
                quantity: 1
            }
        ],
        timeSeconds: 32
    },
    {
        item: Item.Supercomputer,
        name: "OC Supercomputer",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.RadioControlUnit,
                quantity: 3
            },
            {
                item: Item.CoolingSystem,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.Supercomputer,
                quantity: 1
            }
        ],
        timeSeconds: 20
    },
    {
        item: Item.Supercomputer,
        name: "Super-State Computer",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Computer,
                quantity: 3
            },
            {
                item: Item.ElectromagneticControlRod,
                quantity: 2
            },
            {
                item: Item.Battery,
                quantity: 20
            },
            {
                item: Item.Wire,
                quantity: 45
            }
        ],
        outputs: [
            {
                item: Item.Supercomputer,
                quantity: 2
            }
        ],
        timeSeconds: 50
    },
    {
        item: Item.ThermalPropulsionRocket,
        name: "Thermal Propulsion Rocket",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.ModularEngine,
                quantity: 5
            },
            {
                item: Item.TurboMotor,
                quantity: 2
            },
            {
                item: Item.CoolingSystem,
                quantity: 6
            },
            {
                item: Item.FusedModularFrame,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.ThermalPropulsionRocket,
                quantity: 2
            }
        ],
        timeSeconds: 120
    },
    {
        item: Item.TurboMotor,
        name: "Turbo Motor",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.CoolingSystem,
                quantity: 4
            },
            {
                item: Item.RadioControlUnit,
                quantity: 2
            },
            {
                item: Item.Motor,
                quantity: 4
            },
            {
                item: Item.Rubber,
                quantity: 24
            }
        ],
        outputs: [
            {
                item: Item.TurboMotor,
                quantity: 1
            }
        ],
        timeSeconds: 32
    },
    {
        item: Item.TurboMotor,
        name: "Turbo Electric Motor",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Motor,
                quantity: 7
            },
            {
                item: Item.RadioControlUnit,
                quantity: 9
            },
            {
                item: Item.ElectromagneticControlRod,
                quantity: 5
            },
            {
                item: Item.Rotor,
                quantity: 7
            }
        ],
        outputs: [
            {
                item: Item.TurboMotor,
                quantity: 3
            }
        ],
        timeSeconds: 64
    },
    {
        item: Item.TurboMotor,
        name: "Turbo Pressure Motor",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.Motor,
                quantity: 4
            },
            {
                item: Item.PressureConversionCube,
                quantity: 1
            },
            {
                item: Item.PackagedNitrogenGas,
                quantity: 24
            },
            {
                item: Item.Stator,
                quantity: 8
            }
        ],
        outputs: [
            {
                item: Item.TurboMotor,
                quantity: 2
            }
        ],
        timeSeconds: 32
    },
    {
        item: Item.Turbofuel,
        name: "Unpackage Turbofuel",
        building: Building.Packager,
        inputs: [
            {
                item: Item.PackagedTurbofuel,
                quantity: 2
            }
        ],
        outputs: [
            {
                item: Item.Turbofuel,
                quantity: 2
            },
            {
                item: Item.EmptyCanister,
                quantity: 2
            }
        ],
        timeSeconds: 6
    },
    {
        item: Item.Turbofuel,
        name: "Turbofuel",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.Fuel,
                quantity: 6
            },
            {
                item: Item.CompactedCoal,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.Turbofuel,
                quantity: 5
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.Turbofuel,
        name: "Turbo Heavy Fuel",
        building: Building.Refinery,
        inputs: [
            {
                item: Item.HeavyOilResidue,
                quantity: 5
            },
            {
                item: Item.CompactedCoal,
                quantity: 4
            }
        ],
        outputs: [
            {
                item: Item.Turbofuel,
                quantity: 4
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.Turbofuel,
        name: "Turbo Blend Fuel",
        building: Building.Blender,
        inputs: [
            {
                item: Item.Fuel,
                quantity: 2
            },
            {
                item: Item.HeavyOilResidue,
                quantity: 4
            },
            {
                item: Item.Sulfur,
                quantity: 3
            },
            {
                item: Item.PetroleumCoke,
                quantity: 3
            }
        ],
        outputs: [
            {
                item: Item.Turbofuel,
                quantity: 6
            }
        ],
        timeSeconds: 8
    },
    {
        item: Item.UraniumFuelRod,
        name: "Uranium Fuel Rod",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.EncasedUraniumCell,
                quantity: 50
            },
            {
                item: Item.EncasedIndustrialBeam,
                quantity: 3
            },
            {
                item: Item.ElectromagneticControlRod,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.UraniumFuelRod,
                quantity: 1
            }
        ],
        timeSeconds: 150
    },
    {
        item: Item.UraniumFuelRod,
        name: "Uranium Fuel Unit",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.EncasedUraniumCell,
                quantity: 100
            },
            {
                item: Item.ElectromagneticControlRod,
                quantity: 10
            },
            {
                item: Item.CrystalOscillator,
                quantity: 3
            },
            {
                item: Item.Beacon,
                quantity: 6
            }
        ],
        outputs: [
            {
                item: Item.UraniumFuelRod,
                quantity: 3
            }
        ],
        timeSeconds: 300
    },
    {
        item: Item.UraniumWaste,
        name: "Uranium Waste",
        building: Building.NuclearPowerPlant,
        inputs: [
            {
                item: Item.UraniumFuelRod,
                quantity: 1
            },
            {
                item: Item.Water,
                quantity: 1500
            }
        ],
        outputs: [
            {
                item: Item.UraniumWaste,
                quantity: 50
            }
        ],
        timeSeconds: 300
    },
    {
        item: Item.VersatileFramework,
        name: "Versatile Framework",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.ModularFrame,
                quantity: 1
            },
            {
                item: Item.SteelBeam,
                quantity: 12
            }
        ],
        outputs: [
            {
                item: Item.VersatileFramework,
                quantity: 2
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.VersatileFramework,
        name: "Flexible Framework",
        building: Building.Manufacturer,
        inputs: [
            {
                item: Item.ModularFrame,
                quantity: 1
            },
            {
                item: Item.SteelBeam,
                quantity: 6
            },
            {
                item: Item.Rubber,
                quantity: 8
            }
        ],
        outputs: [
            {
                item: Item.VersatileFramework,
                quantity: 2
            }
        ],
        timeSeconds: 16
    },
    {
        item: Item.Wire,
        name: "Wire",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.CopperIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Wire,
                quantity: 2
            }
        ],
        timeSeconds: 4
    },
    {
        item: Item.Wire,
        name: "Fused Wire",
        building: Building.Assembler,
        inputs: [
            {
                item: Item.CopperIngot,
                quantity: 4
            },
            {
                item: Item.CateriumIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Wire,
                quantity: 30
            }
        ],
        timeSeconds: 20
    },
    {
        item: Item.Wire,
        name: "Iron Wire",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.IronIngot,
                quantity: 5
            }
        ],
        outputs: [
            {
                item: Item.Wire,
                quantity: 9
            }
        ],
        timeSeconds: 24
    },
    {
        item: Item.Wire,
        name: "Caterium Wire",
        building: Building.Constructor,
        inputs: [
            {
                item: Item.CateriumIngot,
                quantity: 1
            }
        ],
        outputs: [
            {
                item: Item.Wire,
                quantity: 8
            }
        ],
        timeSeconds: 4
    }
];