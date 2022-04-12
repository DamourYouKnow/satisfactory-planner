import { Building } from './data/buildings';
import { Recipe } from './data/recipes';
import { Item } from './data/items';

export class Factory {
    name: string;
    sections: FactorySection[];

    constructor() {
        this.name = 'My Factory';
        this.sections = [];
    }
}

export class FactorySection {
    groups: FactoryBuildingGroup[];

    constructor() {
        this.groups = [];
    }
}

export interface ItemFlow {
    item: Item,
    quantity: number,
    ratePerMinute: number
}

export class FactoryRecipe<TBuilding extends Building, TItem extends Item> {
    item: TItem;
    name: string;
    building: TBuilding;
    inputs: ItemFlow[];
    outputs: ItemFlow[];
    timeSeconds: number;

    constructor(building: TBuilding, item: TItem, recipe: Recipe) {
        this.item = item;
        this.name = recipe.name;
        this.building = building;
        this.inputs = recipe.inputs.map((input) => {
            return {
                item: input.item,
                quantity: input.quantity,
                ratePerMinute: FactoryRecipe.ratePerMinute(
                    input.quantity,
                    recipe.timeSeconds
                )
            };
        });
        this.outputs = recipe.outputs.map((output) => {
            return {
                item: output.item,
                quantity: output.quantity,
                ratePerMinute: FactoryRecipe.ratePerMinute(
                    output.quantity,
                    recipe.timeSeconds
                )
            };
        });
        this.timeSeconds = recipe.timeSeconds;
    }

    private static ratePerMinute(quantity: number, seconds: number): number {
        return (60 / seconds) * quantity;
    }
}

export class FactoryBuilding<TBuilding extends Building, TItem extends Item> {
    building: TBuilding;
    recipe: FactoryRecipe<TBuilding, TItem>;

    constructor(recipe: FactoryRecipe<TBuilding, TItem>,
    ) {
        this.building = recipe.building;
        this.recipe = recipe;
    }
}

export class FactoryBuildingGroup {
    building: FactoryBuilding<Building, Item>;
    count: number;

    constructor (building: FactoryBuilding<Building, Item>, count: number) {
        this.building = building;
        this.count = count;
    }
}
