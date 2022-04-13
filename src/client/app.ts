import { Building } from './data/buildings';
import { Item } from './data/items';
import { recipes } from './data/recipes';
import { 
    Factory,
    FactorySection,
    FactoryRecipe,
    FactoryBuilding,
    FactoryBuildingGroup,
    ItemFlow
} from './factory';
import { Dropdown, DropdownItem } from './ui';
import { dom } from './dom';

window.onload = function() {
    new App();
};

class App {
    factory: Factory;
    buildingDropdown: Dropdown;
    recipeDropdown: Dropdown;

    constructor() {
        this.factory = new Factory();

        this.buildingDropdown = new Dropdown(dom().id('building-select'));

        this.recipeDropdown = new Dropdown(dom().id('recipe-select'));
        this.recipeDropdown.onSelect = this.handleRecipeSelect;

        this.loadBuildingDropdown();
        this.loadRecipeDropdown();

        const addBuildingBtn = dom().id<HTMLButtonElement>('add-building-btn');
        addBuildingBtn.onclick = () => this.addBuilding();
    }

    private loadBuildingDropdown(item?: Item) {
        let filteredRecipes = recipes;
        if (item) {
            filteredRecipes = recipes.filter((recipe) => recipe.item == item);
        }

        const buildingSet = new Set<Building>();
        for (const recipe of filteredRecipes) {
            if (!buildingSet.has(recipe.building)) {
                buildingSet.add(recipe.building);
            }
        }

        this.loadDropdown(
            this.buildingDropdown,
            Array.from(buildingSet).map((building) => {
                return {
                    value: building,
                    label: building,
                    image: `images/${building}.png`
                };
            })
        );
    }

    private loadRecipeDropdown(building?: Building) {
        let filteredRecipes = recipes;
        if (building) {
            filteredRecipes = recipes.filter((recipe) => {
                return recipe.building == building;
            });
        }

        this.loadDropdown(
            this.recipeDropdown,
            Array.from(filteredRecipes).map((recipe) => {
                return {
                    value: recipe.item,
                    label: recipe.name,
                    image: `images/${recipe.item}.png`
                };
            })
        );
    }

    private loadDropdown(dropdown: Dropdown, items: DropdownItem[]) {
        dropdown.items = items;
        dropdown.update();
    }

    private handleRecipeSelect(item: DropdownItem) {
        return null;
    }

    private addBuilding() {
        const item = this.recipeDropdown.selected;

        const recipe = recipes.find((recipe) => recipe.name == item.label);
        const factoryRecipe = new FactoryRecipe(
            recipe.building,
            recipe.item,
            recipe
        );
        const building = new FactoryBuilding(factoryRecipe);
        
        if (this.factory.sections.length == 0) {
            this.factory.sections.push(new FactorySection());
        }
        const group = new FactoryBuildingGroup(building, 1);
        this.factory.sections[0].groups.push(group);

        const groupDiv = dom().create('div', {
            classList: ['building-group']
        });
        groupDiv.appendChild(flowTable(group.building.recipe.inputs));
        groupDiv.appendChild(buildingGroupInfo(group));
        groupDiv.appendChild(flowTable(group.building.recipe.outputs));

        dom().id('report-view').appendChild(groupDiv);
    }
}

function buildingGroupInfo(
    group: FactoryBuildingGroup
): HTMLDivElement {
    const infoDiv = dom().create('div', {
        classList: ['building-group-info']
    });

    const image = dom(infoDiv).create('img');
    image.src = `images/${group.building.building}.png`;

    dom(infoDiv).create('div', {
        textContent: group.building.building
    });

    const buildingCountDiv = dom(infoDiv).create('div', {
        textContent: `x`
    });
    const buildingCountInput = dom(buildingCountDiv).create('input', {
        attributes: {
            'type': 'text'
        },
        classList: ['building-count-input']
    });
    buildingCountInput.value = '1';

    return infoDiv;
}

function flowTable(itemFlows: ItemFlow[]): HTMLTableElement {
    const table = dom().create('table', {
        classList: ['item-flow-table']
    });
    for (const itemFlow of itemFlows) {
        const row = dom().create('tr');

        const imageCell = dom().create('td');
        const image = dom(imageCell).create('img');
        image.src = `images/${itemFlow.item}.png`;
        
        const itemCell = dom().create('td', {
            classList: ['item-flow-label']
        });
        dom(itemCell).create('div', {
            textContent: String(itemFlow.item)
        });
        dom(itemCell).create('div', {
            classList: ['item-flow-quantity'],
            textContent: `x ${itemFlow.quantity}`
        });

        const rateCell = dom().create('td', {
            classList: ['item-flow-rate'],
            textContent: String(`${itemFlow.ratePerMinute} / min`) 
        });

        row.appendChild(imageCell);
        row.appendChild(itemCell);
        row.appendChild(rateCell);

        table.appendChild(row);
    }

    return table;
}