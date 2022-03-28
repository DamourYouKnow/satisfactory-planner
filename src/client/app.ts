import { Building } from './data/buildings';
import { Item } from './data/items';
import { recipes } from './data/recipes';
import { 
    FactoryRecipe,
    FactoryBuilding,
    FactoryBuildingGroup
} from './factory';
import { Dropdown } from './ui';

window.onload = function() {
    loadBuildingDropdown();
    loadRecipeDropdown();

    const addBuildingBtn = document.getElementById(
        'add-building-btn'
    ) as HTMLButtonElement;
    addBuildingBtn.onclick = function() {
        const recipeDropdown = document.getElementById(
            'item-select'
        ) as HTMLSelectElement;

        const recipe = recipes.find((recipe) => {
            return recipe.name == recipeDropdown.value;
        });
        const factoryRecipe = new FactoryRecipe(
            recipe.building,
            recipe.item,
            recipe
        );
        const building = new FactoryBuilding(factoryRecipe);
        const group = new FactoryBuildingGroup(building, 1);

        document.body.appendChild(inputTable(group));
    };
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

    loadDropdown(
        document.getElementById('building-select') as HTMLDivElement,
        Array.from(buildingSet).map(String)
    );
}

function loadRecipeDropdown(building?: Building) {
    const filteredRecipes = !building ? recipes : recipes.filter((recipe) => {
        return recipe.building == building;
    });

    loadDropdown(
        document.getElementById('item-select') as HTMLDivElement,
        Array.from(filteredRecipes).map((recipe) => recipe.name)
    );
}

function loadDropdown(elem: HTMLDivElement, items: string[]) {
    const dropdown = new Dropdown(elem);
    dropdown.items = items.map((item) => {
        return {
            label: item,
            value: item,
        };
    });
    dropdown.update();
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
