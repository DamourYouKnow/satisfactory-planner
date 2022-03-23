import { Building } from './data/buildings';
import { Recipe } from './data/recipes';
import { Item } from './data/items';

class Factory {

}

class FactorySection {

}

export class FactoryRecipe<TBuilding extends Building, TItem extends Item> {
    item: TItem;
    name: string;
    building: TBuilding;
    inputs: { item: Item, quantity: number, ratePerMinute: number }[];
    outputs: { item: Item, quantity: number, ratePerMinute: number }[];
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
                    recipe.timeSeconds,
                    input.quantity
                )
            };
        });
        this.outputs = recipe.outputs.map((output) => {
            return {
                item: output.item,
                quantity: output.quantity,
                ratePerMinute: FactoryRecipe.ratePerMinute(
                    recipe.timeSeconds,
                    output.quantity
                )
            };
        });
        this.timeSeconds = recipe.timeSeconds;
    }

    private static ratePerMinute(quantity: number, seconds: number): number {
        return (60 / seconds) * quantity;
    }
}

class FactoryBuilding<TBuilding extends Building, TItem extends Item> {
    building: TBuilding;
    recipe: FactoryRecipe<TBuilding, TItem>;

    constructor(recipe: FactoryRecipe<TBuilding, TItem>,
    ) {
        this.building = recipe.building;
        this.recipe = recipe;
    }
}

class FactoryBuildingGroup<TBuilding extends Building, TItem extends Item> {
    buildings: FactoryBuilding<TBuilding, TItem>[];

    constructor (buildings: FactoryBuilding<TBuilding, TItem>[]) {
        this.buildings = buildings;
    }
}
