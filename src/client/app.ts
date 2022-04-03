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
    loadBuildingDropdown();
    loadRecipeDropdown();
};

function loadBuildingDropdown(item?: Item) {
    const filteredRecipes = !item ? recipes : recipes.filter((recipe) => {
        return recipe.item == item;
    });
   
    const buildingSet = new Set<Building>();
    for (const recipe of filteredRecipes) {
        if (!buildingSet.has(recipe.building)) {
            buildingSet.add(recipe.building);
        }
    }

    const dropdown = new Dropdown(dom().id('building-select'));
    loadDropdown(
        dropdown,
        Array.from(buildingSet).map((building) => {
            return {
                value: building,
                label: building
            };
        })
    );
}

function loadRecipeDropdown(building?: Building) {
    const filteredRecipes = !building ? recipes : recipes.filter((recipe) => {
        return recipe.building == building;
    });

    const dropdown = new Dropdown(dom().id('recipe-select'));
    dropdown.onSelect = handleRecipeSelect;
    loadDropdown(
        dropdown,
        Array.from(filteredRecipes).map((recipe) => {
            return {
                value: recipe.item,
                label: recipe.name,
                image: `images/${recipe.item}.png`
            };
        })
    );
}

function loadDropdown(dropdown: Dropdown, items: DropdownItem[]) {
    dropdown.items = items;
    dropdown.update();
}

function handleRecipeSelect(item: DropdownItem) {
    return null;
}

function inputTable(group: FactoryBuildingGroup): HTMLTableElement {
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
