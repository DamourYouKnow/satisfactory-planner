import { Building } from './data/buildings';
import { Recipe, recipes } from './data/recipes';
import { Item } from './data/items';

interface FactoryJSON {
    name: string,
    sections: {
        groups: {
            building: string,
            recipe: string,
            count: number
        }[]
    }[]
}

abstract class JSONSerializer<T, TJSON> {
    abstract fromJSON(json: TJSON): T
    abstract toJSON(value: T): TJSON;
}

class FactoryJSONSerializer extends JSONSerializer<Factory, FactoryJSON> {
    fromJSON(json: FactoryJSON) {
        const factory = new Factory(json.name);
        factory.sections = json.sections.map((section) => {
            const newSection = new FactorySection();
            newSection.groups = section.groups.map((group) => {
                const recipe = recipes.find((recipe) => {
                    return recipe.name == group.recipe;
                });
                const buildingKey = Object.keys(Building).find((key) => {
                    return Building[key] == group.building;
                });
                return new FactoryBuildingGroup(
                    new FactoryBuilding(new FactoryRecipe(
                        Building[buildingKey],
                        recipe.item,
                        recipe
                    )),
                    group.count
                );
            });
            return newSection;
        });
        return factory;
    }
    
    toJSON(value): FactoryJSON {
        return {
            name: value.name,
            sections: value.sections.map((section) => {
                return {
                    groups: section.groups.map((group) => {
                        return  {
                            building: group.building.building.toString(),
                            recipe: group.building.recipe.name,
                            count: group.count
                        };
                    })
                };
            })
        };
    }
}

export class Factory {
    name: string;
    sections: FactorySection[];
    static serializer = new FactoryJSONSerializer();

    constructor(name?: string) {
        this.name = name || 'My Factory';
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

export class FactoryRecipe<TBuilding extends Building, TItem extends Item>  {
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

    get inputs(): ItemFlow[] {
        return this.building.recipe.inputs.map((input) => {
            return {
                item: input.item,
                quantity: input.quantity * this.count,
                ratePerMinute: input.ratePerMinute * this.count 
            };
        });
    }

    get outputs(): ItemFlow[] {
        return this.building.recipe.outputs.map((output) => {
            return {
                item: output.item,
                quantity: output.quantity * this.count,
                ratePerMinute: output.ratePerMinute * this.count 
            };
        });
    }

    constructor (building: FactoryBuilding<Building, Item>, count: number) {
        this.building = building;
        this.count = count;
    }
}
