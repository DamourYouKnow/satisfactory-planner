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
                    label: building
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
        
        const section = new FactorySection();
        const group = new FactoryBuildingGroup(building, 1);
        section.groups.push(group);

        dom().id('report-view').appendChild(this.inputTable(group));
        dom().id('report-view').appendChild(this.outputTable(group));
    }

    private inputTable(group: FactoryBuildingGroup): HTMLTableElement {
        return flowTable(group.building.recipe.inputs);
    }

    private outputTable(group: FactoryBuildingGroup): HTMLTableElement {
        return flowTable(group.building.recipe.outputs);
    }
}

function flowTable(itemFlows: ItemFlow[]): HTMLTableElement {
const table = document.createElement('table');
        for (const itemFlow of itemFlows) {
            const row = document.createElement('tr');

            const imageCell = document.createElement('td');
            const image = document.createElement('img') as HTMLImageElement;
            image.src = `images/${itemFlow.item}.png`;
            imageCell.appendChild(image);
            
            const itemCell = document.createElement('td');
            const itemNameDiv = document.createElement('div');
            itemNameDiv.textContent = String(itemFlow.item);
            const itemQuantityDiv = document.createElement('div');
            itemQuantityDiv.textContent = String(itemFlow.quantity);
            itemCell.appendChild(itemNameDiv);
            itemCell.appendChild(itemQuantityDiv);

            const rateCell = document.createElement('td');
            rateCell.textContent = String(`${itemFlow.ratePerMinute} / min`);

            row.appendChild(imageCell);
            row.appendChild(itemCell);
            row.appendChild(rateCell);

            table.appendChild(row);
        }

        return table;
}