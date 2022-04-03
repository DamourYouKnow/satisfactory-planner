import { Building } from './data/buildings';
import { Item } from './data/items';
import { recipes } from './data/recipes';
import { 
    FactoryRecipe,
    FactoryBuilding,
    FactoryBuildingGroup
} from './factory';
import { Dropdown, DropdownItem } from './ui';
import { dom } from './dom';

window.onload = function() {
    const app = new App();
};

class App {
    buildingDropdown: Dropdown;
    recipeDropdown: Dropdown;

    constructor() {
        this.buildingDropdown = new Dropdown(dom().id('building-select'));

        this.recipeDropdown = new Dropdown(dom().id('recipe-select'));
        this.recipeDropdown.onSelect = this.handleRecipeSelect;

        this.loadBuildingDropdown();
        this.loadRecipeDropdown();
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

    private inputTable(group: FactoryBuildingGroup): HTMLTableElement {
        const table = document.createElement('table');
        for (const input of group.building.recipe.inputs) {
            const row = document.createElement('tr');

            const imageCell = document.createElement('td');
            
            const itemCell = document.createElement('td');
            const itemNameDiv = document.createElement('div');
            itemNameDiv.textContent = String(input.item);
            const itemQuantityDiv = document.createElement('div');
            itemQuantityDiv.textContent = String(input.quantity);
            itemCell.appendChild(itemNameDiv);
            itemCell.appendChild(itemQuantityDiv);

            const rateCell = document.createElement('td');
            rateCell.textContent = String(`${input.ratePerMinute} / min`);

            row.appendChild(imageCell);
            row.appendChild(itemCell);
            row.appendChild(rateCell);

            table.appendChild(row);
        }

        return table;
    }
}
